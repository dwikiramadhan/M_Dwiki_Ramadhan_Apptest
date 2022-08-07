const contacts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [
                ...state,
                {
                    firstName: action.firstName,
                    message: action.message
                }
            ]

        case 'ADD_CONTACT_SUCCESS':
            return state.map(item => {
                item.sent = true
                return item
            });

        case 'ADD_CONTACT_FAILURE':
            return state.map((item) => {
                if (item.id === action.id) {
                    item.sent = false
                }
                return item
            });

        case 'LOAD_CONTACT_SUCCESS':
            return action.data.data.map((item) => {
                item.sent = true;
                return item
            })

        case 'LOAD_CONTACT_FAILURE':
            return state;

        default:
            return state;
    }
}

export default contacts;