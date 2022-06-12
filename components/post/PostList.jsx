import Card from "/components/wrapper/Card"
import Column from "/components/wrapper/Column"
import PostCard from "/components/post/PostCard"

const PostList = ({ posts }) => {
    return (
        <Card className="bg-surface1">
            {posts ? 
            <Column>
                {posts.map((post) => <PostCard post={post} className="bg-surface2 hover:bg-surface3" key={post._id} />)}
            </Column> :
            "Loading..."
            }
        </Card>
    )
}

export default PostList