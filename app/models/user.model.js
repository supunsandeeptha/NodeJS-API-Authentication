const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating a schema
const userSchema = new Schema ({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },

    password:{
        type:String,
        required:true
    }
});

//creating a model
const User = mongoose.model('user',userSchema);

//exporting the model
module.exports = User;