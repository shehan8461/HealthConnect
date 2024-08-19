const mongoose=require("mongoose")

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'please add title'],
    
    },
    description:{
        type:String,
        required:[true,'please add description'],
        unique:true,
     
    },
    postBy:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'User',
    
    },
 

},
{timestamps:true}
);
module.exports=mongoose.model("Post",postSchema)