import mongoose  from "mongoose";
const connectDB=async()=>{
    try{
await mongoose.connect("mongodb+srv://samalbhagyashree75_db_user:saF81WPlF0jndk5Z@cluster0.nufpawp.mongodb.net/");
console.log("mongodb connected successful");
    }catch(err){
console.log(err);
    }
}
export default connectDB;