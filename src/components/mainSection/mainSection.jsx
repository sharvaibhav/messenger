import React from "react";
import PropTypes from "prop-types";
import {
  updateMessageHistory,
  updateDraftMessage,
  clearDraft
} from "../../actions/messengerActions";
import { connect } from "react-redux";
import { getRandomSentence } from "../../getRandomSentence";

import ChatLine from "../chatLine/chatLine";
import ChatInputSection from "../chatInputSection/chatInputSection";
import "./style.scss";

export const MainSection = ({
  updateMessageHistory,
  currentUser,
  remoteUser,
  messages,
  updateDraftMessage,
  draft,
  clearDraft
}) => {
  const onMessageSendHandler = event => {
    const messageValue = draft;
    event.preventDefault();
    if (!messageValue) return null;
    updateMessageHistory(currentUser.userId, remoteUser.userId, {
      message: draft,
      name: currentUser.name
    });
    clearDraft(currentUser.userId, remoteUser.userId);
    setTimeout(
      () =>
        updateMessageHistory(currentUser.userId, remoteUser.userId, {
          message: getRandomSentence(),
          name: remoteUser.name
        }),
      1000
    );
    event.target[0].value = draft;
  };

  const onUpdateDraftMessage = event => {
    console.log("in");
    const draft = event.target.value;
    updateDraftMessage(currentUser.userId, remoteUser.userId, draft);
  };

  return (
    <div className="main-section">
      <div className="header">
        <strong>{currentUser.name.toUpperCase()} </strong> is talking to{" "}
        <strong>{remoteUser.name.toUpperCase()}</strong>
      </div>
      <div className="message-logs">
        {console.log(messages)}
        {messages.map((message, index) => (
          <ChatLine
            key={index}
            message={message}
            left={message.name === currentUser.name}
          />
        ))}
      </div>
      <div className="message-editor">
        <ChatInputSection
          initValue={draft}
          remoteUser={remoteUser}
          onSubmitHandler={onMessageSendHandler}
          updateDraftHandler={onUpdateDraftMessage}
        />
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
  const messageObject = state.messageReducer[
    [currentUser.userId, remoteUser.userId]
  ]
    ? state.messageReducer[[currentUser.userId, remoteUser.userId]]
    : { messages: [], draft: "" };
  const messages = [...messageObject.messages];
  const draft = messageObject.draft;

  return {
    currentUser: currentUser,
    remoteUser: remoteUser,
    messages: messages,
    draft: draft
  };
};

const mapDispatchToProps = dispatch => ({
  updateMessageHistory: (userId, remoteUserId, message) =>
    dispatch(updateMessageHistory(userId, remoteUserId, message)),
  updateDraftMessage: (userId, remoteUserId, message) =>
    dispatch(updateDraftMessage(userId, remoteUserId, message)),
  clearDraft: (userId, remoteUserId) =>
    dispatch(clearDraft(userId, remoteUserId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection);
