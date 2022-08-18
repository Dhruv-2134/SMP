const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema(
    {

        identity: String,
        name: String,
        password: String
        
    }
);

module.exports = mongoose.model('useradmain',ItemSchema);
