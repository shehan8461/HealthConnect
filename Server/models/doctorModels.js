const mongoose=require("mongoose")

const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please add doctor names'],
    
    },
    specialization:{
        type:String,
        required:[true,'please add specialization of doctor'],
        unique:true,
     
    },

    postedBy:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true,
   
    
    },

 

},
{timestamps:true}
);
module.exports=mongoose.model("Doctors",doctorSchema)