const userControl = {};
const userModel =require("../models/user.model");

userControl.getUsers = async (req,res)=>{
    const users= await userModel.find();
    res.json(users);
};
userControl.getUser = async (req,res)=>{
    const user=await userModel.findById(req.params.id);
    console.log(req.params.id);
    res.json(user);
};
userControl.createUsers = async (req,res)=>{
    const {profile,idType,name,lastName,email,birthDate,photo} = req.body;
    const user = new userModel({
        profile:profile,
        idType:idType,
        name:name,
        lastName:lastName,
        email:email,
        birthDate:birthDate,
        photo:photo,
    })
    await user.save();
    res.json({message: "User saved"});
};
userControl.deleteUsers = async (req,res)=>{
    console.log(req.params.id);
    await userModel.findByIdAndDelete(req.params.id);
    res.json({message: "User deleted"});
};
userControl.updateUser = async (req,res)=>{
    const {profile,idType,name,lastName,email,birthDate,photo} = req.body;
    await userModel.findByIdAndUpdate(req.params.id,{
        profile:profile,
        idType:idType,
        name:name,
        lastName:lastName,
        email:email,
        birthDate:birthDate,
        photo:photo,
    });
    res.json({message: "User Updated"});
};

module.exports = userControl;