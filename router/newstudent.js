const express = require('express');
const User = require('../Model/Student');
const router = express.Router();

router.get('/newstud',async(req,res)=>{
    res.send('Fill New Student details!! ');

    let user = await User.create({
        name:"Aryan Singh",
        email:"aryan@iiitbh.com",
        rollNo:"2101008CS",
        password: "aryan",
        phone: 1234567890,
        dateOfBirth: "19th Sep"

    })
    console.log(user);
});

module.exports = router;