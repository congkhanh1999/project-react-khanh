export const addNewProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product
    }
}

export const deleteProduct = (product) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: product
    }
}

export const updateProduct = (product) => {
    return {
        type: 'UPDATE_PRODUCT',
        payload: product
    }
}