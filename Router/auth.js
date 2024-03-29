const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken")

require("../DB/coonection");
const User = require("../modles/userSchema");

router.get("/", (req, res) => {
  res.send("hello world from router side");
});

// Registerd Using Async - Await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cppassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cppassword) {
    return res.status(422).json({ error: "Please fill the form" });
  }

  try {
    const userExists = await User.findOne({ email: email });

    if (userExists) {

      return res.status(422).json({ error: "Email already exists" });

    } else if (password != cppassword) {

      res.status(422).json({ message: "pasoowrd is not matched" });

    } else {

      const user = new User({ name, email, phone, work, password, cppassword });

      await user.save();

      res.status(201).json({ message: "Successfully registered" });

    }
  } catch (error) {
    console.log(error);
  }
});

// Login
router.post("/singin", async (req, res) => {

  // console.log(req.body   );
  // res.status(201).json({message:"Awsome"})

  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(500).json({ error: "Please fill The form" });
    }

    const userlogin = await User.findOne({ email: email });

    if (userlogin) {

      const isMatch = await bcrypt.compare(password, userlogin.password);
      
      const token = await userlogin.generateAuthtoken();

      res.cookie("jwtoken", token ,  {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true
      });

      console.log(token);

      if (!isMatch) {

        res.status(400).json({ message: "Invalid Credentials" });

      } else {

        res.status(200).json({ message: "user registerd succesfully" });

      }
    } else {
        
        res.status(400).json({ message: "Invalid Credentials" });

    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

