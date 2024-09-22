const express = require('express');
const { addNewUserHandler } = require('../controller/user-controller');
const router = express.Router();

router.post("/register-user",(req,res)=>{

    const data = [
        req.body['num_of_experience'],
        req.body['experience_description']
    ]

    const result = addNewUserHandler(data);
    return res.send(result);
});


module.exports = router;