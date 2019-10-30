export default (state = { 0: ['hi', 'how', 'are you ?'] }, action) => {
    switch (action.type) {
        case 'UPDATE_MESSAGE':
            const {userId,message } = action.payload
            let currentMessages = state[userId] ? state[userId] : [];
            currentMessages.push(message)
            return {...state,[userId]: currentMessages }
        default:
            return state
    }
}