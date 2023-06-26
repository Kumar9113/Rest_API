const mongoose=require('mongoose');

const Brandname=new mongoose.Schema({
    brandname:{
        type:String,
        require:true
    },
    date:
    {
        type:Date,
        default:Date.now
    }
    ,location:
    {
        type:String,
        require:true
    },
})

module.exports=mongoose.model('Brand',Brandname)

///***//********** */

