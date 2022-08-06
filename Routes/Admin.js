const express = require('express');
const User = require('../Model/Administration');
const router = express.Router();

router.post('/newadmin', async (req, res) => {
    // res.send('Fill New Student details!! ');
    try {
        console.log(req.body);
        let user = await User.create({

            id: req.body.id,
            name: req.body.name,
            password: req.body.password

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