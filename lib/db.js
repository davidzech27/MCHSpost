import mongoose from "mongoose"

const connectToDB = async () => {
    if (mongoose.connection.readyState === 1) {
        console.log("already connected to database")
        return
    }

    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true //! set autoIndex to false when indexes have been finalized
    })

    mongoose.set("returnOriginal", false)
    console.log("connected to database")
}

const withDB = (handler) => {
    return async (req, res) => {
        try {
            await connectToDB()
        } catch (err) {
            console.log(err)
            res.status(500).send("Server encountered error connecting to database!")
        }

        try {
            await handler(req, res)
        } catch (err) {
            console.log(err)
            res.status(500).send(`A database error has occurred: ${err.message}`)
        }
    }
}

export { connectToDB, withDB }