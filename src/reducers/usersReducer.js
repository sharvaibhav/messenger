
const initialState = {
    users: [{ 'userId': 3, 'name': 'shaun' },
    { 'userId': 1, 'name': 'mark' },
    { 'userId': 2, 'name': 'bert' }
    ], 
    currentUser: { 'userId': 0, 'name': 'henry' },
    remoteUser: {'userId' : 3, name:'shaun'}
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_USER':
            return { ...state, remoteUser: action.payload }
        default:
            return state
    }
}