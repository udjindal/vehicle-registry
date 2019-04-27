//Require mongoose package
const mongoose = require('mongoose');

//Define BucketlistSchema with title, description and category
const MovementSchema = mongoose.Schema({
    vehicle_id: {
      type: String,
      required: true
    },
    movement : {
      type: String,
      required: true,
      enum: ['in', 'out']
    },
    timestamp: {
      type: Date,
      default: Date.now()
    }
});

//Create a model using mongoose.model and export it
const Movement = module.exports = mongoose.model('Movement', MovementSchema );


//BucketList.find() returns all the lists
module.exports.getAllEntries = (callback) => {
	Movement.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addEntry = (newEntry, callback) => {
	newEntry.save(callback);
}
//
// module.exports.updateMovement = (id, movement, callback) => {
//   Vehicle.update({_id:id}, {$set: {movement:movement}}, callback);
// }
//We pass on an id and remove it from DB using Bucketlist.remove()
