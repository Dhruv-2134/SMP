const express = require('express');
const User = require('../Model/form');
const router = express.Router();

router.post('/formdetails', async (req, res) => {
    // res.send('Fill New Student details!! ');
    try {
        console.log(req.body);
        let user = await User.create({
            studentname: req.body.studentname,
            instituterollNo: req.body.instituterollNo,
            fathername: req.body.fathername,
            batchYear: req.body.batchyear,
            programStudy: req.body.programstudy,
            branchStudy: req.body.branchstudy,
            applicationfor: req.body.applicationfor,
            reason: req.body.reason,
            semester: req.body.semester,
            uploadfeereceipt: req.body.uploadfeereceipt
        

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