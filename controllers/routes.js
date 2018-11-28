const express = require('express');

var router = express.Router();


const burger= require('../models/burgers.js')
router.get('/', function(req,res){
    burger.all(function(burgers_data){
    console.log(burgers_data)
    res.render('index',{burgers_data});})
    
}
) 
router.put('/burgers/update',function(req,res){
    burger.update(req.body.burgers_id, function(result){
        console.log(result);
        res.redirect('/')
    })
})
router.post('/burgers/create',function(req,res) {
    burger.create(req.body.burger_name, function(result){
        res.redirect('/');
    })
})

module.exports=router; 