const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]

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

// generate jwt token 

userSchema.methods.generateAuthtoken = async function () {
    try {
        let tokenn = jwt.sign({_id:this._id} , process.env.SECRETKEY);
        this.tokens = this.tokens.concat({token: tokenn});
        await this.save();
        return tokenn;
    } catch (error) {
        console.log(error);
    }
}


const User = mongoose.model('USER' , userSchema);
module.exports = User;