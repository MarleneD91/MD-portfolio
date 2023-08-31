import mongoose from "mongoose"

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    firstname: {
        type: String,
        required: [true, "Please provide a firstname"]
    },
    email: {
        type: String,
        required: [true, "Please provide an email address to message you back"],
        unique: true
    },
    message: {
        type: String,
        required: [true, "Don't hesitate to tell me what you need!"],
        minlength: [40, "I need some details to answer!"]
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//Special case with NextJs. If model is already created in db, if not create it.
export default mongoose.models.contact || mongoose.model('contact', contactSchema)
