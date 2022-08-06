const express = require('express');
const User = require('../Model/Student');
const router = express.Router();

router.post('/newstud', async (req, res) => {
    // res.send('Fill New Student details!! ');
    try {
        console.log(req.body);
        let user = await User.create({
            name: req.body.name,
            email: req.body.email,
            rollNo: req.body.rollno,
            password: req.body.password,
            phone: req.body.phone,
            dateOfBirth: req.body.dateofbirth

        }).then(() => {
            res.json({ status: 0 });
        })
            .catch(() => {
                res.json({ status: 2 });

            })
        // console.log(user);
    } catch (error) {
        res.json({ status: -1 });
    }
});

module.exports = router;