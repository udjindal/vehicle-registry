//Require mongoose package
const mongoose = require('mongoose');

//Define BucketlistSchema with title, description and category
const OwnerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    description: String,
    category: {
        type: String,
        required: true,
        enum: ['PermanentResident', 'Visitor']
    }
});

//Create a model using mongoose.model and export it
const Owner = module.exports = mongoose.model('Owner', OwnerSchema );


//BucketList.find() returns all the lists
module.exports.getAllOwners = (callback) => {
	Owner.find(callback);
}

module.exports.getOwner = (number, callback) => {
	Owner.findOne({'number': number}, callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addOwner = (newOwner, callback) => {
	newOwner.save(callback);
}


//We pass on an id and remove it from DB using Bucketlist.remove()
module.exports.deleteOwnerById = (id, callback) => {
	let query = {_id: id};
	Owner.remove(query, callback);
}
