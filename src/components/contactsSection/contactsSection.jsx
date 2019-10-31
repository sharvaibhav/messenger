import React, { useState } from "react";

import { selectUser } from "../../actions/simpleaction";
import { connect } from "react-redux";

import "./style.scss";

export const ContactsSection = props => {
  const onUserClickHandler = user => {
    props.selectUser(user);
  };

  return (
    <div className="contacts-section">
      <div className="contacts-header"> Contacts </div>
      {props.allUsers.map((user, index) => (
        <div
          className="contact-item"
          key={index}
          onClick={() => onUserClickHandler(user)}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  const allUsers = state.usersReducer.users;
  return {
    allUsers
  };
};

const mapDispatchToProps = dispatch => ({
  selectUser: currentUser => dispatch(selectUser(currentUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsSection);
