const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema(
    {

        name: String,
        email: String,
        rollNo: String,
        password: String,
        phone: Number,
        dateOfBirth: String
        
    }
);

module.exports = mongoose.model('user',ItemSchema);
