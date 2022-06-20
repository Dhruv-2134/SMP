const mongoose = require('mongoose');
let url = '';

const connect = async () => {
    try {
        await mongoose.connect(url);
        console.log('Good to go on !!');
    } 
    catch (error) {
        console.log('error' + error);
    }
}
module.exports = connect;