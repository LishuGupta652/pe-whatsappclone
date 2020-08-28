import React from 'react'
import './Chat.css'
import {Avatar, IconButton } from '@material-ui/core'
import {MoreVert,SearchOutlined, AttachFile } from '@material-ui/icons'

function Chat() {
    const [seed, setSeed] = React.useState('')
    React.useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    return (
        <div className="chat">
            <div className="chat__header">
                 <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                 <div className="chat__headerInfo">
                     <h2>Room Name</h2> 
                     <p>Last Seen at ...</p> 
                 </div>

                 <div className="chat__headerRight">
                    <IconButton><SearchOutlined/></IconButton>
                    <IconButton><AttachFile /></IconButton>
                    <IconButton><MoreVert /></IconButton>
                 </div>
            </div>
            <div className="chat__body"></div>
            <div className="chat__footer"></div>
        </div>
    )
}

export default Chat
