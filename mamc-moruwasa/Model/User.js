const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
    {
        username:
        {
            type:String,
            required:true,
            unique:true,
            max:255,
            min:6,

        },
        meterNo:{
             type:String,
             max:10,
        },
       
       
        phonenumber:{
            type:String,
           
        },
        date:
        {
            type:Date,
            default:Date.now
        }


    }
);


module.exports = mongoose.model("MORUWASA CLIENT",userSchema);

