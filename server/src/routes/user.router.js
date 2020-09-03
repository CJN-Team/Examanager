const {getUsers,createUsers,deleteUsers,getUser,updateUser} = require("../controllers/user.controller");
const { Router } = require("express");
const router = Router();

router.route("/")
    .get(getUsers)
    .post(createUsers);

router.route("/:id")
    .delete(deleteUsers)
    .get(getUser)
    .put(updateUser);

module.exports = router;