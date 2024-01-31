const dotenv = require('dotenv')
const express = require('express')
const app = express();

// const mongoose = require('mongoose')

// Dotenv 
// cmd - type null > config.env(which create a new config file)
dotenv.config({path:'./config.env'}); //
// const User = require('./modles/userSchema') 
PORT =process.env.PORT;

// Database  connection
require('./DB/coonection')
// to get data in JSON format
app.use(express.json())
// const DB = process.env.DATABASE;  // add to mongo url to the config file as env 
// mongoose.connect(DB ,{
//     // useNewUrlParser: true,
//     // useCreateIndex: true,
//     // useUnifiedTopology: true,
//     // useFindAndModify: false
// }
//     ).then(() => {
    //     console.log("connection succesful");
    // }).catch((err) => console.log("connection err" , err))
    
    
// Link to Router-file to link routes 
app.use(require('./Router/auth'))



// Midlleware
const middleware = (req,res,next) => {
    console.log("Hello my middleware");
    next();
}

// middleware()

// app.get('/', (req,res) => {
//     res.send("Hello world")
// })

app.get('/about',middleware , (req,res) => {
    console.log("hello from middleware in about");
    res.send("Hello world from about")
})

app.get('/contact', (req,res) => {
    res.send("Hello world from contact")
})

app.get('/login', (req,res) => {
    res.send("Hello world from login")
})

app.get('/singup', (req,res) => {
    res.send("Hello world from singup")
})

// PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is Running at Port ${PORT}`)
})



