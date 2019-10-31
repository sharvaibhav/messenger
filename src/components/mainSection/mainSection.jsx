import React from "react";
import PropTypes from "prop-types";
import { updateMessageHistory } from "../../actions/messengerActions";
import { connect } from "react-redux";
import { getRandomSentence } from "../../getRandomSentence";

import ChatLine from "../chatLine/chatLine";
import ChatInputSection from "../chatInputSection/chatInputSection";
import "./style.scss";

export const MainSection = ({
  updateMessageHistory,
  currentUser,
  remoteUser,
  messages
}) => {
  const onMessageSendHandler = event => {
    const messageValue = event.target[0].value;
    event.preventDefault();
    updateMessageHistory(currentUser.userId, remoteUser.userId, {
      message: messageValue,
      name: currentUser.name
    });

    setTimeout(
      () =>
        updateMessageHistory(currentUser.userId, remoteUser.userId, {
          message: getRandomSentence(),
          name: remoteUser.name
        }),
      1000
    );
    event.target[0].value = "";
  };

  return (
    <div className="main-section">
      <div className="header">
        <strong>{currentUser.name.toUpperCase()} </strong> is talking to{" "}
        <strong>{remoteUser.name.toUpperCase()}</strong>
      </div>
      <div className="message-logs">
        {messages.map((message, index) => (
          <ChatLine
            key={index}
            message={message}
            left={message.name === currentUser.name}
          />
        ))}
      </div>
      <div className="message-editor">
        <ChatInputSection onSubmitHandler={onMessageSendHandler} />
      </div>
    </div>
  );
};

MainSection.propTypes = {
  currentUser: PropTypes.shape({
    userId: PropTypes.number,
    name: PropTypes.string
  }),
  remoteUser: PropTypes.shape({
    userId: PropTypes.number,
    name: PropTypes.string
  }),
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
      name: PropTypes.string
    })
  )
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
