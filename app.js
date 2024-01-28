const express = require('express')
const app = express();

const mongoose = require('mongoose')



// Database  connection
const DB = 'mongodb+srv://thapa:onkar@cluster0.4siuari.mongodb.net/thapa_mern?retryWrites=true&w=majority'
mongoose.connect(DB ,{
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
}
    ).then(() => {
    console.log("connection succesful");
}).catch((err) => console.log("connection err" , err))


// Midlleware
const middleware = (req,res,next) => {
    console.log("Hello my middleware");
    next();
}

// middleware()

app.get('/', (req,res) => {
    res.send("Hello world")
})

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

app.listen(3001, () => {
    console.log("Server is Running at Port")
})


// Dotenv 

