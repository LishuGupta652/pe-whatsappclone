import React from 'react'
import './Chat.css'
import {Avatar, IconButton } from '@material-ui/core'
import {MoreVert,SearchOutlined, AttachFile } from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import {useParams} from 'react-router-dom'
import db from './firebase'
import {useStateValue } from './StateProvider'
import firebase from 'firebase'

function Chat() {
    const [input, setInput] = React.useState("")
    const [seed, setSeed] = React.useState('')
    const { roomId } = useParams();
    const [roomName, setRoomName] = React.useState("");
    const [messages, setMessages] = React.useState([]);
    const [{user}, dispatch ] = useStateValue();

    React.useEffect(() => {
        if(roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name)
            })

            db.collection("rooms").doc(roomId).collection("messages").orderBy('timestamp', 'asc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
        }
    }, [roomId])

    React.useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const sendMessage = (e) => { 
        e.preventDefault();
        console.log("You typed >> ", input);

        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("")
    }
    return (
        <div className="chat">
            <div className="chat__header">
                 <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                 <div className="chat__headerInfo">
                     <h2>{roomName}</h2> 
                     {/* <p>Last Seen at { new Date(messages[messages.length - 1]?.toDate()).toUTCString() }</p>  */}
                 </div>

                 <div className="chat__headerRight">
                    <IconButton><SearchOutlined/></IconButton>
                    <IconButton><AttachFile /></IconButton>
                    <IconButton><MoreVert /></IconButton>
                 </div>
            </div>
            <div className="chat__body">
                {messages.map(message => (
                <p className={`chat__message ${message.name === user.displayName && 'chat__receiver'}`}>
                    
                <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timestamp">{ new Date(message.timestamp?.toDate()).toUTCString() }</span>
                </p>
                ))}
               
              
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
