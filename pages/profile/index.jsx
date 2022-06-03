import { useState } from "react"
import useProfile from "/hooks/api/useProfile"

import Card from "/components/wrapper/Card"
import Column from "/components/wrapper/Column"
import UserDisplay from "/components/user/UserDisplay"
import SmallButton from "/components/input/SmallButton"
import TextInput from "/components/input/TextInput"
import TextArea from "/components/input/TextArea"
import PostList from "/components/post/PostList"

const ProfilePage = () => {
    const { profile, updateProfile, posts } = useProfile()

    const [editMode, setEditMode] = useState(false)

    const [photo, setPhoto] = useState("")
    const [name, setName] = useState("")
    const [bio, setBio] = useState("")

    const noInput = photo === "" && name === "" && bio === ""

    const update = () => {
        updateProfile({ photo, name, bio })

        setEditMode(false)

        setPhoto(""); setName(""); setBio("")
    }

    return (
        <Column>
            {!editMode ?
            <UserDisplay user={profile} button={
                <SmallButton onClick={() => setEditMode(true)} className="w-24 bg-yellow hover:bg-opacity-75 text-background">Edit</SmallButton>
            } /> :
            <Card className="bg-surface1">
                <Column className="mx-10 my-2">
                    <TextArea value={photo} setValue={setPhoto} placeholder="Link to your new profile photo" className="h-32 w-32 self-center bg-surface2 focus:bg-surface3" />

                    <TextInput value={name} setValue={setName} placeholder="Your new display name" className="-mb-2.5 w-80 self-center bg-surface2 focus:bg-surface3" />
                    <div className="mb-2.5 text-center text-2xl text-subtext">{profile.email}</div>

                    <TextArea value={bio} setValue={setBio} placeholder="Your new bio" className="h-[108px] bg-surface2 focus:bg-surface3" />

                    <div className="flex justify-between">
                        <span>
                            <SmallButton onClick={update} disabled={noInput} className={`w-24 mr-1 bg-green text-background ${noInput ? "bg-opacity-40" : "hover:bg-opacity-75"}`}>Save</SmallButton>
                            <SmallButton onClick={() => setEditMode(false)} className="w-24 bg-surface2 hover:bg-hover">Cancel</SmallButton>
                        </span>
                    
                        <span className="text-subtext text-lg">Joined on {new Date(profile.joinedOn).toDateString()}</span>
                    </div>
                </Column>
            </Card>}

            <PostList posts={posts} />
        </Column>
    )
}
 
export default ProfilePage