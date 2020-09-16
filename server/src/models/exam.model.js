const {Schema, model} = require("mongoose");

const examSchema = new Schema({
   id: {
       type: String,
       required: true
   },
   name: {
       type: String,
       required: true
   },
   nquestions: {
        type: int,
        required: true
   },
   difficulty: {
        type: int,
        required: true
   },
   topic: {
       type: String,
       required: true
   },
   date: {
       type: Date,
       required: true
   },
   courseid: {
       type: String,
       required: true
   },
   groupid: {
       type: String,
       required: true
   }
});

module.exports= model("Exam",examSchema);