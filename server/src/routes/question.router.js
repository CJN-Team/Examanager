const {getQuestions,createQuestions,deleteQuestion,getQuestion,updateQuestion} = require("../controllers/question.controller");
const { Router } = require("express");
const router = Router();

router.route("/")
    .get(getQuestions)
    .post(createQuestions);

router.route("/:id")
    .delete(deleteQuestion)
    .get(getQuestion)
    .put(updateQuestion);

module.exports = router;