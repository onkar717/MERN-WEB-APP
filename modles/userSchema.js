const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cppassword: {
        type: String,
        required: true
    }

})




// We are Hashingthe Passowrd 
userSchema.pre('save' , async function(next) {
    console.log("hi from pre");
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cppassword = await bcrypt.hash(this.cppassword, 12);
    }
    next();
})


const User = mongoose.model('USER' , userSchema);
module.exports = User;