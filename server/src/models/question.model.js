const {Schema, model} = require("mongoose");

const questionSchema=new Schema({
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

module.exports= model("Question",questionSchema);