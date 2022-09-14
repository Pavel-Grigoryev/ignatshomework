import React from 'react'
import './Message.css'

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageType) {
    return (
        <div className='message'>
            <img className="massage__img" src={props.avatar} alt="avatar"/>
            <div className="message__text-block">
                <div className="message__text-wrap">
                    <p className="message__author">{props.name}</p>
                    <p className="message__text">{props.message}</p>
                </div>
                <div className="message__time">{props.time}</div>
            </div>
        </div>
    )
}

export default Message
