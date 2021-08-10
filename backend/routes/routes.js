const express=require('express');
const router=express.Router();
const Employee=require('../models/employe');

router.post('/',(req,res)=>{
    let emp=new Employee({
        name:req.body.name,
        position:req.body.position,
        dept:req.body.dept
    });
    emp.save((err,doc)=>{
        if(err){
        console.log("error in post data"+err)
        }else{
            res.send (doc);
        }
    })
})
module.exports=router;
