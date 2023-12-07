import mongoose from 'mongoose';
const {Schema} = mongoose;
const loginSchema = Schema({
    email:String,
    password:String
});

const login = mongoose.models.user ||  mongoose.model('user',loginSchema);
export default login;