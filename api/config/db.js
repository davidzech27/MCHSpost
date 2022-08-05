import mongoose from "mongoose"

export default () => {
	try {
		mongoose.connect(process.env.MONGO_URL, {
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
