const express = require('express');
const questionRouter = express.Router();
const question = require('../models/question.model'); // question model

/* Get all questions */
questionRouter.get('/question/', (req, res, next) => {
    question.find({} , function(err, result){
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

/* Get Single question */
questionRouter.get("/question/:question_id", (req, res, next) => {
    question.findById(req.params.question_id, function (err, result) {
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


/* Add Single question */
questionRouter.question("/question/", (req, res, next) => {
  let newquestion = {
    question:req.body.question,
    category:req.body.category,
    asignature:req.body.asignature,
    thematic:req.body.thematic,
    difficulty:req.body.difficulty,
    answerOptions:req.body.answerOptions,
    correctAnswer:req.body.correctAnswer,
  };
   question.create(newquestion, function(err, result) {
    if(err){
        res.status(400).send({
          success: false,
          error: err.message
        });
    }
      res.status(201).send({
        success: true,
        data: result,
        message: "question created successfully"
      });
  });
});

/* Edit Single question */
questionRouter.patch("/question/:question_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  question.findByIdAndUpdate(req.params.question_id,{ $set: fieldsToUpdate }, { new: true },  function (err, result) {
      if(err){
          res.status(400).send({
             success: false,
            error: err.message
            });
      }
      res.status(200).send({
        success: true,
        data: result,
        message: "question updated successfully"
        });
  });
});

/* Delete Single question */
questionRouter.delete("/question/:question_id", (req, res, next) => {
  question.findByIdAndDelete(req.params.question_id, function(err, result){
      if(err){
        res.status(400).send({
          success: false,
          error: err.message
        });
      }
    res.status(200).send({
      success: true,
      data: result,
      message: "question deleted successfully"
    });
  });
});

module.exports = questionRouter;
