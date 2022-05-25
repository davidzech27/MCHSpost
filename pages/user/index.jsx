import useClientRouteParam from "/hooks/util/useClientRouteParam"
import useUser from "/hooks/api/useUser"

import Card from "/components/wrapper/Card"
import UserDisplay from "/components/user/UserDisplay"

const UserPage = () => {
    const email = useClientRouteParam()

    const user = useUser(email)

    return (
        <Card className="bg-surface1 px-16 py-8">
            {user ?
            <UserDisplay user={user} button={null} /> :
            "Loading..."
            }
        </Card>
    )
}
 
export default UserPage