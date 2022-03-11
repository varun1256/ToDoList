const Task=require('../models/model');


module.exports.home=function(req,res){
    Task.find({},function(err,ts){
           if(err){
               console.log('error in fetching contacts');
               return;
           }
           return res.render('home',{
               title:'welcome',
               tasklist:ts
        
        });



    });
   // return res.render('home',{title:'Welcome',});
}

module.exports.assign=function(req,res){
   
      // console.log(req);
    Task.create({
    description:req.body.description,
    category:req.body.category,
    duedate:req.body.duedate
   }/*, funtion(err,newTask){
       if(err){
           console.log('error in creating a contact!');
           return;
       }
      
   }*/);
   return res.redirect('back');
    
}

module.exports.del=function(req,res){
    let id=req.query.id;
    
    Task.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deletingg an object from database');
            return;
        }
        return res.redirect('back');
    });
}