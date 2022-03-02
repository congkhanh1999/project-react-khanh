


const initialState = {
    listUser: [
        { id: 1, firstname: 'khanh', lastname: 'van', gender: 'male', email: 'khanhpzo99@gmail.com' }
    ]

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER': {
            const newListUser = [...state.listUser]
            newListUser.push(action.payload);
            return {
                ...state,
                listUser: newListUser
            }

        }
        case 'DELETE_USER': {

            const newListUser = state.listUser.filter(user => user.id !== action.payload)
            return {
                ...state,
                listUser: newListUser
            }

        }
        case 'UPDATE_USER': {

            const editIndex = state.listUser.findIndex(user => user.id === action.payload.id)
            console.log(editIndex)

            const newListUser = state.listUser;
            newListUser[editIndex] = action.payload

            return {
                ...state,
                listUser: newListUser
            }

        }
        default: {
            return state;
        }
    }
}

export default userReducer;