export const updateMessageHistory = (
  userId,
  remoteUserId,
  message
) => dispatch => {
  dispatch({
    type: "UPDATE_MESSAGE",
    payload: {
      userId,
      message,
      remoteUserId
    }
  });
};

export const selectUser = currentUser => dispatch => {
  dispatch({
    type: "SELECT_USER",
    payload: currentUser
  });
};
