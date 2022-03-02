


const initialState = {
    listProduct: [
        { id: 1, name: 'Adidas Shoes 1', price: 5000000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 2, name: 'Adidas Shoes 2', price: 6000000, favourite: false, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b80ed3b0cd047868bedadbb00fc57d6_9366/five-ten-freerider-mountain-bike-shoes.jpg' },
        { id: 3, name: 'Adidas Shoes 3', price: 7000000, favourite: false, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/49d1b53655ed44ea8ebeac5b0022f433_9366/shmoofoil-slides.jpg' },
        { id: 4, name: 'Adidas Shoes 4', price: 8000000, favourite: false, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/fb2a411c5dca43d79c76ab680175ea0f_9366/swift-run-shoes.jpg' },
        { id: 5, name: 'Adidas Shoes 5', price: 9000000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 6, name: 'Adidas Shoes 6', price: 1000000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 7, name: 'Adidas Shoes 7', price: 1200000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 8, name: 'Adidas Shoes 8', price: 1300000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 9, name: 'Adidas Shoes 9', price: 1600000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 10, name: 'Adidas Shoes 0', price: 1800000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 11, name: 'Adidas Shoes 12', price: 1900000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 12, name: 'Adidas Shoes 11', price: 2400000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 13, name: 'Adidas Shoes', price: 2500000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 14, name: 'Adidas Shoes', price: 2600000, favourite: false, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ee470e4fb92f49d5b24cac8e00c28eb7_9366/terrex-swift-r3-gore-tex-hiking-shoes.jpg' },
        { id: 15, name: 'Adidas Shoes', price: 2700000, favourite: false, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/6dc535b7f2a243a0a0daacee01126df4_9366/icon-7-boost.jpg' },
        { id: 16, name: 'Adidas Shoes 15', price: 2800000, favourite: false, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5888207e61eb408087f2ad5900dd867c_9366/superstar-shoes.jpg' },
    ]

}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            const newListProduct = [...state.listProduct]
            newListProduct.push(action.payload);
            return {
                ...state,
                listProduct: newListProduct
            }

        }
        case 'DELETE_PRODUCT': {

            const newListProduct = state.listProduct.filter(product => product.id !== action.payload)
            return {
                ...state,
                listProduct: newListProduct
            }

        }
        case 'UPDATE_PRODUCT': {

            const editIndex = state.listProduct.findIndex(product => product.id === action.payload.id);

            const newListProduct = state.listProduct;
            newListProduct[editIndex] = action.payload

            return {
                ...state,
                listProduct: newListProduct
            }

        }
        default: {
            return state;
        }
    }
}

export default productReducer;