import mongoose  from "mongoose";

const connectDB= async function(url){
       mongoose.set('strictQuery',true);
       mongoose.connect(url)
     .then(()=>{
        console.log("Mongoose connected successfully")
     }).catch((error)=>{
        console.log("error aaaa gya bhai mongodb connection mei")
        console.log(error);
     })
}

export default connectDB;