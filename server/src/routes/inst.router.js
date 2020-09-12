const express = require('express');
const instRouter = express.Router();
const inst = require('../models/inst.model'); // inst model

/* Get all institutions */
instRouter.get('/', (req, res, next) => {
    inst.find({} , function(err, result){
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

/* Get Single institution */
instRouter.get("/:inst_id", (req, res, next) => {
    inst.findById(req.params.inst_id, function (err, result) {
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


/* Add Single institution */
instRouter.post("/", (req, res, next) => {
  let newinst = {
    name: req.body.name,
    instType: req.body.instType,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber, //users
  };
   inst.create(newinst, function(err, result) {
    if(err){
        return res.status(400).send({
          success: false,
          error: err.message
        });
    }
      return res.status(200).send({
        success: true,
        data: result,
        message: "institution created successfully"
      });
  });
});

/* Edit Single institution */
instRouter.patch("/:inst_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  inst.findByIdAndUpdate(req.params.inst_id,{ $set: fieldsToUpdate }, { new: true },  function (err, result) {
      if(err){
        return res.status(400).send({
             success: false,
            error: err.message
            });
      }
      return res.status(200).send({
        success: true,
        data: result,
        message: "inst updated successfully"
        });
  });
});

/* Delete Single inst */
instRouter.delete("/:inst_id", (req, res, next) => {
  inst.findByIdAndDelete(req.params.inst_id, function(err, result){
      if(err){
        return res.status(400).send({
          success: false,
          error: err.message
        });
      }
    return res.status(200).send({
      success: true,
      data: result,
      message: "institution deleted successfully"
    });
  });
});

module.exports = instRouter;
