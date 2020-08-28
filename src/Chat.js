import React from 'react'
import './Chat.css'
import {Avatar, IconButton } from '@material-ui/core'
import {MoreVert,SearchOutlined, AttachFile } from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

function Chat() {
    const [input, setInput] = React.useState("")
    const [seed, setSeed] = React.useState('')
    React.useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const sendMessage = (e) => { 
        e.preventDefault();
        console.log("You typed >> ", input);
        setInput("")
    }

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
            <div className="chat__body">
                <p className={`chat__message ${true && 'chat__receiver'}`}>
                    
                <span className="chat__name">Lishu gupta</span>
                    Hey Guys
                    <span className="chat__timestamp">2:52pm</span>
                </p>
               <p className={`chat__message ${true && 'chat__receiver'}`}>
                    
                <span className="chat__name">Lishu gupta</span>
                    Hey Guys
                    <span className="chat__timestamp">2:52pm</span>
                </p>
                 <p className={`chat__message $`}>
                    
                <span className="chat__name">someone</span>
                    Are you there
                    <span className="chat__timestamp">2:53pm</span>
                </p>
              
              
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form action="">
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Please type a message " />
                    <button onClick={sendMessage} type="submit">Send a Message</button>
                </form>
                <MicIcon />

            </div>
        </div>
    )
}

export default Chat
