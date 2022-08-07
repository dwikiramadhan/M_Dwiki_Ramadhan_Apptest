//ADD
export const addContactSuccess = (message) => ({
    type: 'ADD_CONTACT_SUCCESS',
    message
})

export const addContactFailure = (id) => ({
    type: 'ADD_CONTACT_FAILURE',
    id
})

export const addContactView = (id, name, message) => ({
    type: 'ADD_CONTACT',
    id, name, message
})

export const addContact = (data) => {
    return { type: 'POST_CONTACT', data }
};
//END

//EDIT
export const editContactSuccess = (message) => ({
    type: 'EDIT_CONTACT_SUCCESS',
    message
})

export const editContactFailure = (id) => ({
    type: 'EDIT_CONTACT_FAILURE',
    id
})

export const editContactView = (id, name, message) => ({
    type: 'EDIT_CONTACT_RESP',
    id, name, message
})

export const editContact = (data) => {
    console.log('payload', data);
    return { type: 'EDIT_CONTACT', data }
};
//END

//EDIT
export const deleteContactSuccess = (message) => ({
    type: 'DELETE_CONTACT_SUCCESS',
    message
})

export const deleteContactFailure = (id) => ({
    type: 'DELETE_CONTACT_FAILURE',
    id
})

export const deleteContactView = (id, name, message) => ({
    type: 'DELETE_CONTACT_RESP',
    id, name, message
})

export const deleteContact = (data) => {
    console.log('payload', data);
    return { type: 'DELETE_CONTACT', data }
};
//END


//LOAD
export const loadContact = () => {
    return { type: 'LOAD_CONTACT' }
};

export const loadContactSuccess = (data) => ({
    type: 'LOAD_CONTACT_SUCCESS',
    data
})

export const loadContactFailure = () => ({
    type: 'LOAD_CONTACT_FAILURE'
})
//END