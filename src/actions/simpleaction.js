export const simpleAction = () => dispatch => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action"
  });
};

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
