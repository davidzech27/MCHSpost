import LinkCard from "/components/wrapper/LinkCard"
import Link from "next/link"
import Avatar from "/components/user/Avatar"

const PostCard = ({ post, className }) => {
    return (
        <LinkCard href={`/post/${post._id}`} className={className}>
            <Link href={`/user/${post.postedBy.email}`} onClick={(e) => e.stopPropagation()} passHref>
                <div className="w-fit flex items-center">
                    <Avatar user={post.postedBy} className="h-13 w-13 mr-4" />
                    <div className="flex flex-col">
                        <span className="hover:underline">{post.postedBy.name}</span>
                        <span className="text-subtext">{post.postedBy.email}</span>
                    </div>
                </div>
            </Link>
            <br />
            <pre className="font-sans">{post.text}</pre>
            <br />
            <div className="pr-6 text-subtext flex justify-between">
                <span>{post.commentCount} comments</span>
                <span>{new Date(post.postedOn).toDateString()}</span>
            </div>
        </LinkCard>
    )
}
 
export default PostCard