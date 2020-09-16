const express = require('express');
const examRouter = express.Router();
const exam = require('../models/exam.model'); // exam model

/* Get all exams */
examRouter.get('/', (req, res, next) => {
    exam.find({} , function(err, result){
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

/* Get Single exam */
examRouter.get("/:exam_id", (req, res, next) => {
    exam.findById(req.params.exam_id, function (err, result) {
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


/* Add Single exam */
examRouter.post("/", (req, res, next) => {
  let newexam = {
    id: req.body.id,
    name: req.body.name,
    nquestions: req.body.nquestions,
    difficulty: req.body.difficulty,
    topic: req.body.topic,
    date: req.body.date,
    courseid: req.body.courseid,
    groupid: req.body.groupid
  };
   exam.create(newexam, function(err, result) {
    if(err){
        return res.status(400).send({
          success: false,
          error: err.message
        });
    }
      return res.status(201).send({
        success: true,
        data: result,
        message: "exam created successfully"
      });
  });
});

/* Edit Single exam */
examRouter.patch("/:exam_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  exam.findByIdAndUpdate(req.params.exam_id,{ $set: fieldsToUpdate }, { new: true },  function (err, result) {
      if(err){
        return res.status(400).send({
             success: false,
            error: err.message
            });
      }
      return res.status(200).send({
        success: true,
        data: result,
        message: "exam updated successfully"
        });
  });
});

/* Delete Single exam */
examRouter.delete("/:exam_id", (req, res, next) => {
  exam.findByIdAndDelete(req.params.exam_id, function(err, result){
      if(err){
        return res.status(400).send({
          success: false,
          error: err.message
        });
      }
    return res.status(200).send({
      success: true,
      data: result,
      message: "exam deleted successfully"
    });
  });
});

module.exports = examRouter;