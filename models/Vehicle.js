//Require mongoose package
const mongoose = require('mongoose');

//Define BucketlistSchema with title, description and category
const VehicleSchema = mongoose.Schema({
    number: {
        type: String,
        required: true
    },
    model: String,
    description: String,
    category: {
        type: String,
        enum: ['TwoWheeler', 'ThreeWheeler', 'FourWheeler']
    },
    movement : {
      type: String,
      default: 'in',
      enum: ['in', 'out']
    },
    owner_id: {
      type: String,
      required: true
    }
});

//Create a model using mongoose.model and export it
const Vehicle = module.exports = mongoose.model('Vehicle', VehicleSchema );


//BucketList.find() returns all the lists
module.exports.getAllVehicle = (callback) => {
	Vehicle.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addVehicle = (newVehicle, callback) => {
	newVehicle.save(callback);
}
//
// module.exports.updateMovement = (id, movement, callback) => {
//   Vehicle.update({_id:id}, {$set: {movement:movement}}, callback);
// }
//We pass on an id and remove it from DB using Bucketlist.remove()
module.exports.deleteVehicletById = (id, callback) => {
	let query = {_id: id};
	Vehicle.remove(query, callback);
}
