const questionControl = {};
const questionModel =require("../models/question.model");

questionControl.getQuestions = async (req,res)=>{
    const questions= await questionModel.find();
    res.json(questions);
};

questionControl.getQuestion = async (req,res)=>{
    const question=await questionModel.findById(req.params.id);
    console.log(req.params.id);
    res.json(question);
};

questionControl.createQuestions = async (req,res)=>{
    const {question,category,asignature,thematic,difficulty,answerOptions,correctAnswer} = req.body;
    const question = new questionModel({
        question:question,
        category:category,
        asignature:asignature,
        thematic:thematic,
        difficulty:difficulty,
        answerOptions:answerOptions,
        correctAnswer:correctAnswer,
    })
    await question.save();
    res.json({message: "question saved"});
};

questionControl.deleteQuestion = async (req,res)=>{
    console.log(req.params.id);
    await questionModel.findByIdAndDelete(req.params.id);
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
    });
    res.json({message: "question Updated"});
};

module.exports = questionControl;