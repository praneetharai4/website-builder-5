import express from 'express';
import { Schema,mongoose } from 'mongoose';
const uiRoute = express.Router();
import fs from 'fs';
import User from '../model/User';
// var mongoose = require('mongoose');


uiRoute.get('/', (req, res) => {
    res.render('home', { title: 'Webpage Builder'});
});

uiRoute.get('/editor', (req, res) => {
    res.render('editor', { title: 'Webpage Builder'});
});


  
uiRoute.post('/sendData',async (req,res)=>{
    console.log(req.body); 
    
        let body = req.body
        var new_user = new User(body);
        
        await new_user.save()
    
    res.send('done');
})

uiRoute.post('/elementContent',(req,res)=>{
    // console.log(req.body);
    var htmlContent = req.body.demo;
    var script = "<script src=\"../js//deploy.js\"></script>";
    var bootstrap = "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css\" />"
    var pos = htmlContent.indexOf('</body>',0);
    htmlContent = addStr(htmlContent,pos,script);
    pos = htmlContent.indexOf('</head>',0);
    htmlContent = addStr(htmlContent,pos,bootstrap);
    var filepath = __dirname+'\\..\\public\\uix\\ex.html';
    console.log(filepath);
    fs.writeFile(filepath,htmlContent,err =>{
        if(err)
            console.log(err);
        else 
            res.send('Updated the file');
        
    });
    
})

function addStr(str, index, stringToAdd){
    return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
  }

uiRoute.all('*', (req, res) =>{
    res.render('404');
});

export default uiRoute;