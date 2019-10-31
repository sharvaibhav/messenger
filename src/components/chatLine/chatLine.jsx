import React from "react";
import cx from "classnames";
import "./style.scss";
import PropTypes from "prop-types";

const ChatLine = ({ message, left }) => {
  return (
    <div className={cx("chat-line", { left: left })}>
      <div className="user-name">{message.name}</div>
      <div className={cx("message-line", { left: left })}>
        {message.message}
      </div>
    </div>
  );
};

ChatLine.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.string,
    name: PropTypes.string
  })
};

export default ChatLine;
