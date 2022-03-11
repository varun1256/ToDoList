const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');
console.log('hello i am router');

router.get('/',homeController.home);
router.post('/create-task',homeController.assign);
router.get('/delete-task',homeController.del);
router.use('/user',require("./routeuser"));


module.exports=router;