const mongoose = require('mongoose');

const schema = new mongoose.schema(
    {

        name: String,
        email: String,
        rollNo: String,
        password: String,
        phone: Number,
        dateOfBirth: String
        
    }
)

module.exports = mongoose.model('user',schema);