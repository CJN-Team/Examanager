const express = require('express');
const questionsRouter = express.Router();
const questions = require('../models/question.model'); // questions model

/* Get all questionss */
questionsRouter.get('/', (req, res, next) => {
    questions.find({} , function(err, result){
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

/* Get Single questions */
questionsRouter.get("/:questions_id", (req, res, next) => {
    questions.findById(req.params.questions_id, function (err, result) {
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


/* Add Single questions */
questionsRouter.questions("/", (req, res, next) => {
  let newquestions = {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author
  };
   questions.create(newquestions, function(err, result) {
    if(err){
        return res.status(400).send({
          success: false,
          error: err.message
        });
    }
      return res.status(201).send({
        success: true,
        data: result,
        message: "questions created successfully"
      });
  });
});

/* Edit Single questions */
questionsRouter.patch("/:questions_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  questions.findByIdAndUpdate(req.params.questions_id,{ $set: fieldsToUpdate }, { new: true },  function (err, result) {
      if(err){
        return res.status(400).send({
             success: false,
            error: err.message
            });
      }
      return res.status(200).send({
        success: true,
        data: result,
        message: "questions updated successfully"
        });
  });
});

/* Delete Single questions */
questionsRouter.delete("/:questions_id", (req, res, next) => {
  questions.findByIdAndDelete(req.params.questions_id, function(err, result){
      if(err){
        return res.status(400).send({
          success: false,
          error: err.message
        });
      }
    return res.status(200).send({
      success: true,
      data: result,
      message: "questions deleted successfully"
    });
  });
});

module.exports = questionsRouter;
