const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    question: {
        type:String,
        required:true
    },
    category: {
        type:String,
        required:true
    },
    asignature: {
        type:String,
        required:true
    },
    thematic: {
        type:String,
        required:true
    },
    difficulty: {
        type:Int32Array,
        required:true
    },
    answerOptions: {
        type:Array,
        required:false
    },
    correctAnswer: {
        type:Int32Array,
        require:false
    }
}
);

const question = mongoose.model("question", questionSchema);
module.exports = question;