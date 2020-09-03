const userControl = {};
const userModel =require("../models/user.model");

userControl.getUsers = async (req,res)=>{
    const users= await userModel.find({} , function(err, result){
        if(err){
            return res.status(400).send({
                'success': false,
                'error': err.message
            });
        }
        res.status(200).send({
            'success': true,
            'data': result
        });
    });
    res.json(users);
};

userControl.getUser = async (req,res)=>{
    const user=await userModel.findById(req.params.id,function (err, result) {
        if(err){
            return res.status(400).send({
               success: false,
               error: err.message
             });
        }
        res.status(200).send({
            success: true,
            data: result
        });
    });
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
    await user.save({}, function(err, result) {
        if(err){
            return res.status(400).send({
              success: false,
              error: err.message
            });
        }
          res.status(201).send({
            success: true,
            data: result,
            message: "Question created successfully"
          });
      });
    res.json({message: "User saved"});
};

userControl.deleteUsers = async (req,res)=>{
    console.log(req.params.id);
    await userModel.findByIdAndDelete(req.params.id, function(err, result){
        if(err){
            return res.status(400).send({
            success: false,
            error: err.message
          });
        }
      res.status(200).send({
        success: true,
        data: result,
        message: "Post deleted successfully"
      });
    });
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
    },function (err, result) {
        if(err){
            return res.status(400).send({
               success: false,
              error: err.message
              });
        }
        res.status(200).send({
          success: true,
          data: result,
          message: "Question updated successfully"
          });
    });
    res.json({message: "User Updated"});
};

module.exports = userControl;