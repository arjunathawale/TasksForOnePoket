const express = require('express');
exports.dotenv = require('dotenv').config();

var PORT = process.env.PORT;
var hostname = process.env.HOST_NAME

var app = express();



app.get("/", (req, res)=>{
    res.send("Hello, World!");
})


app.get("/readFileData", require('./fileHandeling').readFileData)

app.listen(PORT, hostname, (err) => {
    if (!err) {
        console.log('Server is listening on ' + hostname, PORT);
    }
    else {
        console.log(err);
    }
})
