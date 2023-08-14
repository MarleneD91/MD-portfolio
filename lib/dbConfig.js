import mongoose from "mongoose" // In order to talk w/ the db!

const connect = async () => {
    
    try {
        await mongoose.connect("mongodb+srv://" 
                                + process.env.DB_USER_NAME
                                + ":" + process.env.DB_PASSWORD
                                +"@" + process.env.DB_NAME 
                                + "/?retryWrites=true&w=majority")

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