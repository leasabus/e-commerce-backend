const express = require('express');
const app = express();
require('dotenv').config()
const port = 3000;


const PORT = process.env.PORT;

app.get("/app" , (req , res) => {   
     res.send("Hello world")
})

app.listen(port , () => {
    console.log(`App listen on port ${port}`)
})

console.log("Hello world!")
