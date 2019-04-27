//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const owner = require('../models/Owner');

router.get('/',(req,res) => {
	owner.getAllOwners((err, owners)=> {
		if(err) {
			res.json({success:false, message: `Failed to load all owners. Error: ${err}`});
		}
		else {
			res.write(JSON.stringify({success: true, owners:owners},null,2));
			res.end();

	}
	});
});


//POST HTTP method to /bucketlist

router.post('/', (req,res,next) => {
	console.log(req.body);
	let newOwner = new owner({
		name: req.body.name,
		description: req.body.description,
		category: req.body.category,
	});
	owner.addOwner(newOwner,(err, list) => {
		if(err) {
			res.json({success: false, message: `Failed to create a new owner. Error: ${err}`});

		}
		else
			res.json({success:true, message: "Added successfully."});

	});
});


//DELETE HTTP method to /bucketlist. Here, we pass in a params which is the object id.
router.delete('/:id', (req,res,next)=> {
	let id = req.params.id;
	console.log(id);
	owner.deleteOwnerById(id,(err,list) => {
		if(err) {
			res.json({success:false, message: `Failed to delete the owner. Error: ${err}`});
		}
		else if(list) {
			res.json({success:true, message: "Deleted successfully"});
		}
		else
			res.json({success:false});
	})
});


module.exports = router;
