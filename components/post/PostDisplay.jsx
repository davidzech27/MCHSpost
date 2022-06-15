import Card from "/components/wrapper/Card"
import UserInfo from "/components/user/UserInfo"

const PostDisplay = ({ post }) => {
    return (
        <Card className="bg-surface1">
            {post ?
            <>
                <UserInfo user={post.postedBy} />
                <br />
                <div className="text-lg break-words whitespace-pre-wrap">{post.text}</div>
                <br />
                <div className="pr-6 text-subtext flex justify-end">
                    <span>{new Date(post.postedOn).toDateString()}</span>
                </div>
            </> :
            "Loading..."
            }
        </Card>
    )
}
 
export default PostDisplay