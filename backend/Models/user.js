//Data Base Model (schema)


//import mongoose module
const mongoose = require('mongoose');

var uniqueValidator = require('mongoose-unique-validator');

//create plat schema attributes
var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
    tel: Number,
    role: String
});

// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);


//create plat model name and affect platSchema
const user = mongoose.model("User",userSchema);

//export model
module.exports = user; 