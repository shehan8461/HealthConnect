const mongoose=require("mongoose")

const postSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:[true,'please add userId'],
        unique:true,
      
    
    },
    serviceType:{
        type:String,
        required:[true,'please add serviceType'],
    
    },
    bookingDate:{
        type:String,
        required:[true,'please add bookingDate'],
       
     
    },
    contact:{
        type:String,
        required:[true,'please add contact'],
       
    
     
    },
    specialIndustries:{
        type:String,
        required:[true,'please add specialIndustries'],
       
    },
    postedBy:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true,
   
    
    },
 

},
{timestamps:true}
);
module.exports=mongoose.model("Bookings_details",postSchema)