import mongoose from "mongoose"

const PostSchema = new mongoose.Schema({
    text: {//user generated
        type: String,
        default: "..."
    },
    poster: {//determined by server based on who sent post request
        email: String,
        name: String,
        photo: String
    },
    comments: [{//not set at document creation
        text: String,
        commenter: {
            email: String,
            name: String,
            photo: String
        },
        commentedOn: {
            type: Date,
            default: Date.now
        }
    }],
    postSetting: {//user generated, but error will be sent if user tries to put anything other than enum values
        type: String,
        enum: ["public", "private"]
    },
    postedOn: {//defaults to time of document creation
        type: Date,
        default: Date.now
    }
})

//TODO: look more into feasbility of different photo upload methods. remember cloudinary

PostSchema.index({ poster: 1, postedOn: -1 })
PostSchema.index({ postSetting: 1, postedOn: -1 })


export default mongoose.model("Post", PostSchema)