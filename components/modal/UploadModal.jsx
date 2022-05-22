import { useState } from "react"
import useUpload from "/hooks/api/useUpload"

import Modal from "/components/modal/Modal"
import Column from "/components/wrapper/Column"
import Button from "/components/input/Button"
import TextArea from "/components/input/TextArea"
import SmallButton from "/components/input/SmallButton"

const UploadModal = () => {
    const uploadPost = useUpload()
    const [text, setText] = useState("")
    const [postSetting, setPostSetting] = useState("public")

    const noText = text === ""

    return (
        <Modal>
            <Column>
                <TextArea value={text} setValue={setText} placeholder={`Post something ${postSetting}ly`} className="h-44 bg-surface2 focus:bg-surface3" />
                <div className="flex justify-end relative">
                    <div className="h-full w-1/3 absolute left-0 flex flex-col justify-around items-center">
                        <SmallButton onClick={() => setPostSetting("public")} className={`w-24 ${postSetting === "public" ? "bg-hover" : "bg-surface2"}`}>Public</SmallButton>
                        <SmallButton onClick={() => setPostSetting("private")} className={`w-24 ${postSetting === "private" ? "bg-hover" : "bg-surface2"}`}>Private</SmallButton>
                    </div>
                    <Button onClick={() => uploadPost({ text, postSetting })} disabled={noText} className={`w-2/3 bg-yellow text-surface1 ${noText ? "bg-opacity-40" : "hover:bg-opacity-85"}`}>Post</Button>{/*consider changing to hover:bg-hover*/}
                </div>
            </Column>
        </Modal>
    )
}
 
export default UploadModal