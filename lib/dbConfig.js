import mongoose from "mongoose" // In order to talk w/ the db!

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log('Connection to MongoDB succeeded!')
        })

        connection.on('error', (err) => {
            console.log("Connection to MongoDB failed: " + err)
            process.exit()
        })

    } catch(err) {
        console.log(err)
    }
}

export default connect