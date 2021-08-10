const mongoose=require('mongoose');

const Employee=mongoose.model('Employe',{
    name:{type:String},
    position:{type:String},
    dept:{type:String}
});
module.export=mongoose;