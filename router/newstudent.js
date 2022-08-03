const express = require('express');
const User = require('../Model/Student');
const router = express.Router();

router.post('/newstud', async (req, res) => {
    // res.send('Fill New Student details!! ');
    try {
        console.log(req.body);
        let user = await User.create({
            name: req.body.name
        }).then(()=>{
            res.json({ status: 0 });
        })
        .catch(()=>{
            res.json({ status: 2 });

        })
        // console.log(user);
    } catch (error) {
        res.json({status:-1});
    }
});

module.exports = router;