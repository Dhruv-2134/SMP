const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema(
    {

        studentname: String,
        instituterollNo: String,
        fathername: String,
        batchYear: String,
        programStudy: String,
        branchStudy: String,
        applicationfor: String,
        reason: String,
        semester: String,
        uploadfeereceipt: String
        
        
    }
);

module.exports = mongoose.model('formdetails',ItemSchema);
