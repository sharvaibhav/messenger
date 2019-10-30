import React, { useState } from 'react'
import { updateMessageHistory } from "../../actions/simpleaction";
import { connect } from 'react-redux';
import './style.scss'

export const MainSection = (props) => {
    const onMessageSendHandler = (event) => {
        event.preventDefault();
        props.updateMessageHistory(props.remoteUser.userId, event.target[0].value)
        event.target[0].value = '';

    }
    return (<div className="main-section">
        <div className="message-logs">
            {props.messages.map((message, index) => <div key={index} className="chat-line"> <div className="user-name">{props.currentUser.name}</div> <div  className="message-line">{message}</div> </div>)}
        </div>
        <div className="message-editor">
            <form onSubmit={onMessageSendHandler} >
                <div className="text-section"><input type="text" /></div>
                <div className="send-button"><button type="submit">Send</button> </div>
            </form>

        </div>

    </div>);
}


const mapStateToProps = state => {
    const currentUser = state.usersReducer.currentUser;
    const remoteUser = state.usersReducer.remoteUser;
    const messagesCurrentUser = state.messageReducer[currentUser.userId] ? [...state.messageReducer[currentUser.userId]] : [];
    const messagesRemoteUser = state.messageReducer[remoteUser.userId] ? [...state.messageReducer[remoteUser.userId]] : []
    return ({
        currentUser: currentUser,
        remoteUser: remoteUser,
        messages : messagesCurrentUser.concat(messagesRemoteUser)
    })
}

const mapDispatchToProps = dispatch => ({
    updateMessageHistory: (userId, message) => dispatch(updateMessageHistory(userId, message))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
