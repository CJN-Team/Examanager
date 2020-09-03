const express = require('express');
const userRouter = express.Router();
const user = require('../models/user.model'); // user model

/* Get all users */
userRouter.get('/user/', (req, res, next) => {
    user.find({} , function(err, result){
        if(err){
            res.status(400).send({
                'success': false,
                'error': err.message
            });
        }
        res.status(200).send({
            'success': true,
            'data': result
        });
    });
});

/* Get Single user */
userRouter.get("/user/:user_id", (req, res, next) => {
    user.findById(req.params.user_id, function (err, result) {
        if(err){
             res.status(400).send({
               success: false,
               error: err.message
             });
        }
        res.status(200).send({
            success: true,
            data: result
        });
     });
});


/* Add Single user */
userRouter.user("/user/", (req, res, next) => {
  let newuser = {
    profile:req.body.profile,
    idType:req.body.idType,
    name:req.body.name,
    lastName:req.body.lastName,
    email:req.body.email,
    birthDate:req.body.birthDate,
    photo:req.body.photo,
  };
   user.create(newuser, function(err, result) {
    if(err){
        res.status(400).send({
          success: false,
          error: err.message
        });
    }
      res.status(201).send({
        success: true,
        data: result,
        message: "user created successfully"
      });
  });
});

/* Edit Single user */
userRouter.patch("/user/:user_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  user.findByIdAndUpdate(req.params.user_id,{ $set: fieldsToUpdate }, { new: true },  function (err, result) {
      if(err){
          res.status(400).send({
             success: false,
            error: err.message
            });
      }
      res.status(200).send({
        success: true,
        data: result,
        message: "user updated successfully"
        });
  });
});

/* Delete Single user */
userRouter.delete("/user/:user_id", (req, res, next) => {
  user.findByIdAndDelete(req.params.user_id, function(err, result){
      if(err){
        res.status(400).send({
          success: false,
          error: err.message
        });
      }
    res.status(200).send({
      success: true,
      data: result,
      message: "user deleted successfully"
    });
  });
});

module.exports = userRouter;
