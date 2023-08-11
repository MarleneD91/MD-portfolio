import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"]
    }
})

//Special case with NextJs. If model is already created in db, if not create it.
export default mongoose.models.User || mongoose.model('User', userSchema)
