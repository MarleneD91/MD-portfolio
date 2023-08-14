import mongoose from "mongoose"

const workSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    issues: {
        type: String
    },
    technos: {
        type: Array,
        required: true
    },
    githubLink: {
        type: Array,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

//Special case with NextJs. If model is already created in db, if not create it.
export default mongoose.models.Work || mongoose.model('Work', workSchema)