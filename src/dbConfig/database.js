import mongoose from 'mongoose';

const dbCon = async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/streamwap");
        console.log("Database connected successfully...")
    } 
    catch (error) {
        console.log("database not connected...")
    }
}
export default dbCon;