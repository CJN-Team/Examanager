const express = require('express');
const usersRouter = express.Router();
const users = require('../models/user.model'); // users model

/* Get all userss */
usersRouter.get('/', (req, res, next) => {
    users.find({} , function(err, result){
        if(err){
            return res.status(400).send({
                'success': false,
                'error': err.message
            });
        }
        return res.status(200).send({
            'success': true,
            'data': result
        });
    });
});

/* Get Single users */
usersRouter.get("/:users_id", (req, res, next) => {
    users.findById(req.params.users_id, function (err, result) {
        if(err){
            return res.status(400).send({
               success: false,
               error: err.message
             });
        }
        return res.status(200).send({
            success: true,
            data: result
        });
     });
});


/* Add Single users */
usersRouter.post("/", (req, res, next) => {
  let newusers = {
    profile: req.body.profile,
    idType: req.body.idType,
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    birthDate: req.body.birthDate,
    photo: req.body.photo,
  };
   users.create(newusers, function(err, result) {
    if(err){
        return res.status(400).send({
          success: false,
          error: err.message
        });
    }
      return res.status(201).send({
        success: true,
        data: result,
        message: "users created successfully"
      });
  });
});

/* Edit Single users */
usersRouter.patch("/:users_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  users.findByIdAndUpdate(req.params.users_id,{ $set: fieldsToUpdate }, { new: true },  function (err, result) {
      if(err){
        return res.status(400).send({
             success: false,
            error: err.message
            });
      }
      return res.status(200).send({
        success: true,
        data: result,
        message: "users updated successfully"
        });
  });
});

/* Delete Single users */
usersRouter.delete("/:users_id", (req, res, next) => {
  users.findByIdAndDelete(req.params.users_id, function(err, result){
      if(err){
        return res.status(400).send({
          success: false,
          error: err.message
        });
      }
    return res.status(200).send({
      success: true,
      data: result,
      message: "users deleted successfully"
    });
  });
});

module.exports = usersRouter;
