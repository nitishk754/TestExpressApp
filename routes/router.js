const express = require('express');
const router = express.Router()


// define your routes here 
router.get('/', function(req,res){
    res.render('login');
})



router.get('/dashboard', function(req,res){
    res.render('home')
})

router.get('/task', function(req,res){
    res.render('task/task');
});

router.get('/call/:name/:id', function(req,res){
    res.send('<h1>Hey '+req.params.name+' ,Welcome to my First express app. Your Id number is : '+req.params.id);
})

// for invalid url 
router.get('*', function(req,res){
    res.send('Inavlid Url');
})

// export this router module to use in index.js file
module.exports = router;