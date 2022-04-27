import mongoose from "mongoose"

export default async () => {
	if (mongoose.connection.readyState === 1) {
		console.log("already connected to database")
		return
	}

	try {
		mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			autoIndex: true //! set autoIndex to false when indexes have been finalized
		})
		mongoose.set("returnOriginal", false)
		console.log("connected to database")
	} catch (err) {
		console.error(err)
	}
}
