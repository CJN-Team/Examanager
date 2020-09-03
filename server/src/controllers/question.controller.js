const questionControl = {};
const questionModel =require("../models/question.model");

questionControl.getQuestions = async (req,res)=>{
    const questions= await questionModel.find({} , function(err, result){
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
    res.json(questions);
};

questionControl.getQuestion = async (req,res)=>{
    const questions=await questionModel.findById(req.params.id,function (err, result) {
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
    console.log(req.params.id);
    res.json(questions);
};

questionControl.createQuestions = async (req,res)=>{
    const {question,category,asignature,thematic,difficulty,answerOptions,correctAnswer} = req.body;
    const questions = new questionModel({
        question:question,
        category:category,
        asignature:asignature,
        thematic:thematic,
        difficulty:difficulty,
        answerOptions:answerOptions,
        correctAnswer:correctAnswer,
    })
    await questions.create({}, function(err, result) {
        if(err){
            return res.status(400).send({
              success: false,
              error: err.message
            });
        }
        return res.status(200).send({
            success: true,
            data: result,
            message: "Question created successfully"
          });
      });
    res.json({message: "question saved"});
};

questionControl.deleteQuestion = async (req,res)=>{
    console.log(req.params.id);
    await questionModel.findByIdAndDelete(req.params.id, function(err, result){
        if(err){
        return  res.status(400).send({
            success: false,
            error: err.message
          });
        }
    return res.status(200).send({
        success: true,
        data: result,
        message: "Question deleted successfully"
      });
    });
    res.json({message: "question deleted"});
};

questionControl.updateQuestion = async (req,res)=>{
    const {question,category,asignature,thematic,difficulty,answerOptions,correctAnswer} = req.body;
    await questionModel.findByIdAndUpdate(req.params.id,{
        question:question,
        category:category,
        asignature:asignature,
        thematic:thematic,
        difficulty:difficulty,
        answerOptions:answerOptions,
        correctAnswer:correctAnswer,
    },function (err, result) {
        if(err){
            return res.status(400).send({
               success: false,
              error: err.message
              });
        }
        return res.status(200).send({
          success: true,
          data: result,
          message: "Question updated successfully"
          });
    });
    res.json({message: "question Updated"});
};

module.exports = questionControl;