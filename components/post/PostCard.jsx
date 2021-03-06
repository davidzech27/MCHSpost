import LinkCard from "/components/wrapper/LinkCard"
import UserInfo from "/components/user/UserInfo"

const PostCard = ({ post, className }) => {
    return (
        <LinkCard href={`/post/${post._id}`} className={className}>
            <UserInfo user={post.postedBy} />
            <br />
            <div className="break-words whitespace-pre-wrap">{post.text}</div>
            <br />
            <div className="pr-6 text-subtext flex justify-between">
                <span>{post.commentCount} comments</span>
                <span>{new Date(post.postedOn).toDateString()}</span>
            </div>
        </LinkCard>
    )
}
 
export default PostCard