    const express = require('express')

    const router = express.Router();

    require('../DB/coonection')
    const User = require("../modles/userSchema")

    router.get('/' , (req,res) => {
        res.send('hello world from router side')
    })
    

    // Registerd Using Async - Await 
    router.post('/register', async (req, res) => {
        const { name, email, phone, work, password, cppassword } = req.body;
    
        if (!name || !email || !phone || !work || !password || !cppassword) {
            return res.status(422).json({ error: "Please fill the form" });
        }
    
        try {
            const userExists = await User.findOne({ email: email });
    
            if (userExists) {
                return res.status(422).json({ error: "Email already exists" });
            }
            else if (password != cppassword) {
                res.status(422).json({message:"pasoowrd is not matched"})
            }
            else{
                const user = new User({ name, email, phone, work, password ,cppassword });
                await user.save();
                res.status(201).json({ message: "Successfully registered" });

            }
    
        } catch (error) {
            console.log(error);
        }
    });
    

    // Login 
    router.post('/singin' , async (req,res) => {
        // console.log(req.body);
        // res.status(201).json({message:"Awsome"})

        try {
            const {email , password} = req.body;
            if (!email || !password) {
                res.status(500).json({error:"Please fill The form"})
            }

            const userlogin =  await User.findOne({email:email});
            if (!userlogin) {
                res.status(400).json({message:"user is not Rgisterd"})
            }
            else{
                res.status(200).json({message:"user registerd succesfully"})
            }

        } catch (error) {
            console.log(error);
        }

    })



module.exports = router;






























    // Using Promises 
    // router.post('/register' , (req , res) => {

    //     const {name  , email, phone , work  , password , cppassword} = req.body;

    //     if (!name || !email || !phone || !work  || !password || !cppassword) {
    //         return res.status(422).json({error:"Please Fill the form"})
    //     }

    //     User.findOne({email:email})
    //     .then((userexists) => {

    //         if (userexists) {
    //             return res.status(422).json({error:"Email is Already Exists"})
    //         }

    //         const user = new User({name, email, phone , work  , password , cppassword})

    //         user.save().then(() => {
    //             res.status(201).json({message:"Succesfully registered"})
    //         }).catch((err) => res.status(500).json({error:" Falied to registered"}))
    //     }).catch(err => {console.log(err)})
    // })

    // router.get('/contact' , (req, res) => {
    //     res.send("Hello from router contact")
    // })