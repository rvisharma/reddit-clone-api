import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: [5, 'Username must be atleast 5 characters']
    },
    password: {
        type: String,
        required: true,
        min: [8, 'Password must be atleast 5 characters']
    }
})

// enrypt password later

const User = mongoose.model('User', userSchema);

export default User;