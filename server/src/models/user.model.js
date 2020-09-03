const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    profile: {
        type:String,
        required:true
    },
    idType: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    birthDate: {
        type:Date,
        required:true
    },
    photo: {
        type:String,
        require:false
    }
}
);

const user = mongoose.model("user", userSchema);
module.exports = user;
