import LinkCard from "/components/wrapper/LinkCard"
import Link from "next/link"
import Avatar from "/components/user/Avatar"

const PostCard = ({ post, className }) => {
    return (
        <LinkCard href={`/post/${post._id}`} className={className}>
            <Link href={`/user/${post.postedBy.email}`} onClick={(e) => e.stopPropagation()} passHref>
                <div className="w-min flex items-center">
                    <Avatar user={post.postedBy} className="h-13 w-13 mr-4" />
                    <div className="flex flex-col">
                        <span className="hover:underline">{post.postedBy.name}</span>
                        <span className="text-subtext">{post.postedBy.email}</span>
                    </div>
                </div>
            </Link>
            <br />
            <div>
                <pre className="font-sans">{post.text}</pre>
                <br />
                <span className="flex justify-end mr-6 text-subtext">{new Date(post.postedOn).toDateString()}</span>
            </div>
        </LinkCard>
    )
}
 
export default PostCard