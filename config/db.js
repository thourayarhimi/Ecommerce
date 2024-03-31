import mongoose from "mongoose";
const connectDB = async()=>{
    try{
const conn = await mongoose.connect(process.env.MONGO_URL);
console.log(`connect `);
    }catch(error){
    console.log(`erreur in mongo ${error}`);
}};

export default connectDB;
