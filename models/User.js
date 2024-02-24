const mongoose = require('mongoose')


// schema - how data is stored or organized
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    }, 
    password: {
        type: String, 
        required: true
    },
    roles: [{
        type: String,
        default: "Employee"
    }],
    active: [{
        type: Boolean,
        default: true
    }]
})


module.exports = mongoose.model('User', userSchema)