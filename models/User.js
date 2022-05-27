import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
	email: {//can be viewed by other users but can't be changed
		type: String,
		unique: true
	},
	name: {//can be viewed by other users and can be changed by user directly
		type: String,
		maxlength: 25
	},
	photo: {//can be viewed by other users and can be changed by user directly
		type: String,
		default: "https://static.hudl.com/users/prod/222809_f107b4b13eeb4a43bf1c9db8d86791c8.jpg",
		maxlength: 1000
	},
	bio: {//can be viewed by other users and can be changed by user directly
		type: String,
		default: "...",
		maxlength: 10000
	},
	posts: [{//can be viewed by other users and can be changed by backend
		type: mongoose.Types.ObjectId,
		ref: "Post"
	}],
	friends: {//can be viewed by other users and can be changed by backend
		type: [String]
    },
	joinedOn: {//can be viewed by other users but can't be changed
		type: Date,
		default: Date.now
	},
	data: {//can't be viewed by other users but can be changed by backend
		friendReqs: [String]
	}
})

export default mongoose.models.User ?? mongoose.model("User", UserSchema)
