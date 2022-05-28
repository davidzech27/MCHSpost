import useClientRouteParam from "/hooks/util/useClientRouteParam"
import useUser from "/hooks/api/useUser"

import Card from "/components/wrapper/Card"
import Column from "/components/wrapper/Column"
import UserDisplay from "/components/user/UserDisplay"
import PostList from "/components/post/PostList"

const UserPage = () => {
    const email = useClientRouteParam()

    const user = useUser(email)

    return (
        <Column>
            <UserDisplay user={user} button={null} />
            
            <PostList posts={user?.posts} />
        </Column>        
    )
}
 
export default UserPage