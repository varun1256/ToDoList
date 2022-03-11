const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/ToDoList');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));

db.once('open',function(){
    console.log('successfully connected to the database')
});