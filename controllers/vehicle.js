//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const vehicle = require('../models/Vehicle');


//GET HTTP method to /bucketlist
router.get('/',(req,res) => {
	vehicle.getAllVehicle((err, vehicles)=> {
		if(err) {
			res.json({success:false, message: `Failed to load all lists. Error: ${err}`});
		}
		else {
			res.write(JSON.stringify({success: true, vehicles:vehicles},null,2));
			res.end();
	}
	});
});


//POST HTTP method to /bucketlist

router.post('/', (req,res,next) => {
	console.log(req.body);
	let newVehicle = new vehicle({
		number: req.body.number,
		description: req.body.description,
		category: req.body.category,
    owner_id: req.body.owner_id
	});
	vehicle.addVehicle(newVehicle,(err, list) => {
		if(err) {
			res.json({success: false, message: `Failed to create a new list. Error: ${err}`});

		}
		else
			res.json({success:true, message: "Added successfully."});

	});
});


//DELETE HTTP method to /bucketlist. Here, we pass in a params which is the object id.
router.delete('/:id', (req,res,next)=> {
	let id = req.params.id;
	console.log(id);
	vehicle.deleteVehicleById(id,(err,list) => {
		if(err) {
			res.json({success:false, message: `Failed to delete the list. Error: ${err}`});
		}
		else if(list) {
			res.json({success:true, message: "Deleted successfully"});
		}
		else
			res.json({success:false});
	})
});

module.exports = router;
