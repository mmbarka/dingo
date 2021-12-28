//Data Base Model (schema)


//import mongoose module
const mongoose = require('mongoose');


//create plat schema attributes
const chefSchema = mongoose.Schema({
    name: String,
    speciality: String,
    experience: Number,
    img: String
});


//create plat model name and affect platSchema
const chef = mongoose.model("Chef",chefSchema);

//export model
module.exports = chef; 