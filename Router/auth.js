const express = require('express')

const router = express.Router();

require('../DB/coonection')
const User = require("../modles/userSchema")

router.get('/' , (req,res) => {
    res.send('hello world from router side')
})

router.post('/register' , (req , res) => {
    const {name  , email, phone , work  , password , cppassword} = req.body;
    if (!name || !email || !phone || !work  || !password || !cppassword) {
        return res.status(422).json({error:"Please Fill the form"})
    }

    User.findOne({email:email})
    .then((userexists) => {
        if (userexists) {
            return res.status(422).json({error:"Email is Already Exists"})
        }
        const user = new User({name, email, phone , work  , password , cppassword})
        user.save().then(() => {
            res.status(201).json({message:"Succesfully registered"})
        }).catch(() => res.status(500).json({error:" Falied to registered"}))
    }).catch(err => {console.log(err)})
})

module.exports = router;
