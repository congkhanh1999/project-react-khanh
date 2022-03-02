export const addNewFavourite = (product) => {
    return {
        type: 'ADD_FAVOURITE',
        payload: product
    }
}

export const deleteFavourite = (product) => {
    return {
        type: 'DELETE_FAVOURITE',
        payload: product
    }
}