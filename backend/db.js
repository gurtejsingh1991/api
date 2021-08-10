const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/meandb',(err)=>{
    if(!err){
        console.log('database connect sucessfully')
    }
    else{
        console.log(" Error in your database"+err)
    }
})
module.exports=mongoose;