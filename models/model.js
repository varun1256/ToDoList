const mongoose= require('mongoose');

const ToDoListSchema= new mongoose.Schema({
            description:{ type:String
                            },
             category:{
                          type:String
             },               
             duedate:{ type:String

             } 

            

});


const Task=mongoose.model('Task',ToDoListSchema);
module.exports=Task;