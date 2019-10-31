import React from "react";
import PropTypes from "prop-types";
import { selectUser } from "../../actions/messengerActions";
import { connect } from "react-redux";

import "./style.scss";

export const ContactsSection = ({ allUsers, selectUser }) => (
  <div className="contacts-section">
    <div className="contacts-header"> Contacts </div>
    {allUsers.map((user, index) => (
      <button
        className="contact-item"
        key={index}
        onClick={() => selectUser(user)}
      >
        {user.name}
      </button>
    ))}
  </div>
);

ContactsSection.propTypes = {
  allUsers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      userId: PropTypes.number
    })
  ),
  selectUser: PropTypes.func
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
