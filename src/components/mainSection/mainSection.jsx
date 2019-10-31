import React from "react";
import { updateMessageHistory } from "../../actions/simpleaction";
import { connect } from "react-redux";
import { getRandomSentence } from "../../getRandomSentence";
import "./style.scss";

export const MainSection = props => {
  const onMessageSendHandler = event => {
    const messageValue = event.target[0].value;
    event.preventDefault();
    props.updateMessageHistory(
      props.currentUser.userId,
      props.remoteUser.userId,
      { message: messageValue, name: props.currentUser.name }
    );

    setTimeout(
      () =>
        props.updateMessageHistory(
          props.currentUser.userId,
          props.remoteUser.userId,
          {
            message: getRandomSentence(),
            name: props.remoteUser.name
          }
        ),
      1000
    );
    event.target[0].value = "";
  };

  return (
    <div className="main-section">
      <div className="header">
        {" "}
        <strong>{props.currentUser.name.toUpperCase()} </strong> is talking to{" "}
        <strong>{props.remoteUser.name.toUpperCase()}</strong>
      </div>{" "}
      <div className="message-logs">
        {props.messages.map((message, index) => (
          <div key={index} className="chat-line">
            <div className="user-name">{message.name}</div>
            <div className="message-line">{message.message}</div>
          </div>
        ))}
      </div>
      <div className="message-editor">
        <form onSubmit={onMessageSendHandler}>
          <div className="text-section">
            <input type="text" />
          </div>
          <div className="send-button">
            <button type="submit">Send</button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const currentUser = state.usersReducer.currentUser;
  const remoteUser = state.usersReducer.remoteUser;
  const messages = state.messageReducer[[currentUser.userId, remoteUser.userId]]
    ? [...state.messageReducer[[currentUser.userId, remoteUser.userId]]]
    : [];

  return {
    currentUser: currentUser,
    remoteUser: remoteUser,
    messages: messages
  };
};

const mapDispatchToProps = dispatch => ({
  updateMessageHistory: (userId, remoteUserId, message) =>
    dispatch(updateMessageHistory(userId, remoteUserId, message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection);
