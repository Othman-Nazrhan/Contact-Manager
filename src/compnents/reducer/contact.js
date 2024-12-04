export default  (state, action) => {

    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {

                contacts: [action.payload, ...state.contacts]
            };
        case 'UPDATE_CONTACT':
            return {

                contacts: state.contacts.map((contact) => contact.id === action.payload.id ? contact = action.payload : contact)
            };
        default:
            return state;
    }
}