const {Schema, model} = require("mongoose");

const instSchema=new Schema({
    name: {
        type:String,
        required:true
    },
    instType: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    phoneNumber: {
        type:String,
        required:true
    },
    users: {
        type: Array,
        required: false
    }
});

module.exports= model("Inst",instSchema);