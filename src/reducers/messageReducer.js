const initialState = {
  ["0,3"]: {
    messages: [
      {
        name: "henry",
        message: "hello my name is not known to you but iam Henry"
      },
      { name: "shaun", message: "lets play this game" }
    ],
    draft: ""
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MESSAGE": {
      const { userId, remoteUserId, message } = action.payload;
      const usersHash = [userId, remoteUserId];
      let currentMessages = state[usersHash].messages
        ? state[usersHash].messages
        : [];
      currentMessages.push(message);
      return {
        ...state,
        [usersHash]: Object.assign(
          state[[usersHash]] ? state[[usersHash]] : { messages: [], draft: "" },
          {
            messages: currentMessages
          }
        )
      };
    }
    case "UPDATE_DRAFT_MESSAGE":
      const { userId, remoteUserId, draft } = action.payload;
      const usersHash = [userId, remoteUserId];
      return {
        ...state,
        [usersHash]: Object.assign(
          state[[usersHash]] ? state[[usersHash]] : { messages: [], draft: "" },
          {
            draft: draft
          }
        )
      };
    case "CLEAR_DRAFT": {
      const { userId, remoteUserId } = action.payload;
      const usersHash = [userId, remoteUserId];
      return {
        ...state,
        [usersHash]: Object.assign(
          state[[usersHash]] ? state[[usersHash]] : { messages: [], draft: "" },
          {
            draft: ""
          }
        )
      };
    }
    default:
      return state;
  }
};
