const express=require('express');

const app= express();
const port=8000;


const db= require('./config/moongoose');
const Task=require('./models/model');
//const ToDo= require('./models/model');

//app.use('/',require('./routes/routeindex'));

app.use(express.urlencoded());
app.use(express.static('assets'));
app.use('/',require('./routes/routeindex'));

app.set('view engine','ejs');
app.set('views','./views');
/*
app.get('/',function(req,res){
    return res.render('home',{title:'Welcome'});

});

app.post('/create-task',function(req,res){
    Task.create({
        description:req.body.description,
        category:req.body.category,
        duedate:req.body.duedate
       },function(err,newTask){
           if(err){
               console.log('error');
               return;
           }
      
       return res.redirect('back');
    });
});
*/




app.listen(port,function(err){
    if(err){
        console.log(`error has been found: ${err}`);
    }
    console.log(`server is running on port:${port}`);
});