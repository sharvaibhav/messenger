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

export const updateDraftMessage = (userId, remoteUserId, draft) => dispatch => {
  dispatch({
    type: "UPDATE_DRAFT_MESSAGE",
    payload: {
      userId,
      draft,
      remoteUserId
    }
  });
};

export const clearDraft = (userId, remoteUserId) => dispatch => {
  dispatch({
    type: "CLEAR_DRAFT",
    payload: {
      userId,
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
