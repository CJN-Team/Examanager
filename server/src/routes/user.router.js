const express = require('express');
const userRouter = express.Router();
const user = require('../models/user.model'); // user model

/* Get all users */
userRouter.get('/', (req, res, next) => {
    user.find({} , function(err, result){
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


module.exports = userRouter;
