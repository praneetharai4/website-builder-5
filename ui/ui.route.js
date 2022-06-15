import express from 'express';
const uiRoute = express.Router();
import fs from 'fs';

uiRoute.get('/', (req, res) => {
    res.render('home', { title: 'Webpage Builder'});
});

uiRoute.get('/editor', (req, res) => {
    res.render('editor', { title: 'Webpage Builder'});
});

uiRoute.post('/elementContent',(req,res)=>{
    console.log(req.body);
    var filepath = __dirname+'\\ex.html';
    console.log(filepath);
    fs.appendFile(filepath,req.body.demo,err =>{
        if(err)
            console.log(err);
        else 
            res.send('Updated the file');
        
    });
    
})


uiRoute.all('*', (req, res) =>{
    res.render('404');
});

export default uiRoute;