export const addNewUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}

export const deleteUser = (id) => {
    return {
        type: 'DELETE_USER',
        payload: id
    }
}

export const updateUser = (user) => {
    return {
        type: 'UPDATE_USER',
        payload: user
    }
}