import React from "react";
import PropTypes from "prop-types";

const ChatInputSection = ({ onSubmitHandler }) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="text-section">
        <input type="text" placeholder="Type something here..." />
      </div>
      <div className="send-button">
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

ChatInputSection.propTypes = {
  onSubmitHandler: PropTypes.func
};

export default ChatInputSection;
