const express = require('express');
const res = require('express/lib/response');
const bodyParser = require('body-parser')
const port = 3000
const app= express();

// include router module
const router = require('./routes/router')
app.use('/',router)
app.use(bodyParser.urlencoded({ extended:false}))

// set templating engine and views path 

app.set('view engine','ejs')
app.set('views','./views')

// to parse json data 
app.use(bodyParser.json());
// define static path 
app.use(express.static('public'))
// start server
app.listen(port, function(){
    console.log("Server running on Port " + port )
})