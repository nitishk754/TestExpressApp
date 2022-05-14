const express = require('express');
const path = require('path')
const multer = require('multer')
const upload = multer()
const port = 3000
const app= express();


// include router module
const router = require('./routes/router')
app.use('/',router)

// middleware
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'public')));


router.post('/login', function(req,res){
    console.log(req.body);
})
// set templating engine and views path 

app.set('view engine','ejs')
app.set('views','./views')

// start server
app.listen(port, function(){
    console.log("Server running on Port " + port )
})