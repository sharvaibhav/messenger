const initialState = {
  ["0,3"]: [
    {
      name: "henry",
      message: "hello my name is not known to you but iam Henry"
    },
    { name: "shaun", message: "lets play this game" }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MESSAGE":
      const { userId, remoteUserId, message } = action.payload;
      const usersHash = [userId, remoteUserId];
      let currentMessages = state[usersHash] ? state[usersHash] : [];
      currentMessages.push(message);
      return { ...state, [usersHash]: currentMessages };
    default:
      return state;
  }
};
