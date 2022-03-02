


const initialState = {
    listFavourite: [

    ]

}

const favouriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVOURITE': {
            const newListFavourite = [...state.listFavourite]
            newListFavourite.push(action.payload);

            return {
                ...state,
                listFavourite: newListFavourite
            }

        }
        case 'DELETE_FAVOURITE': {

            const newListFavourite = state.listFavourite.filter(product => product.id !== action.payload.id)
            return {
                ...state,
                listFavourite: newListFavourite
            }

        }

        default: {
            return state;
        }
    }
}

export default favouriteReducer;