


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
        { id: 17, name: 'Adidas Shoes 1', price: 5000000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 18, name: 'Adidas Shoes 6242', price: 6000000, favourite: false, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b80ed3b0cd047868bedadbb00fc57d6_9366/five-ten-freerider-mountain-bike-shoes.jpg' },
        { id: 19, name: 'Adidas Shoes 3', price: 7000000, favourite: false, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/49d1b53655ed44ea8ebeac5b0022f433_9366/shmoofoil-slides.jpg' },
        { id: 20, name: 'Adidas Shoes 31234', price: 8000000, favourite: false, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/fb2a411c5dca43d79c76ab680175ea0f_9366/swift-run-shoes.jpg' },
        { id: 21, name: 'Adidas Shoes 5', price: 9000000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 22, name: 'Adidas Shoes 3126', price: 1000000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 23, name: 'Adidas Shoes 3127', price: 1200000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 24, name: 'Adidas Shoes 3128', price: 1300000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 25, name: 'Adidas Shoes 3129', price: 1600000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 26, name: 'Adidas Shoes 3120', price: 1800000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 27, name: 'Adidas Shoes 31212', price: 1900000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 28, name: 'Adidas Shoes 131231', price: 2400000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 29, name: 'Adidas Shoes 312', price: 2500000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 30, name: 'Adidas Shoes 312', price: 2600000, favourite: false, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ee470e4fb92f49d5b24cac8e00c28eb7_9366/terrex-swift-r3-gore-tex-hiking-shoes.jpg' },
        { id: 31, name: 'Adidas Shoes 312', price: 2700000, favourite: false, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/6dc535b7f2a243a0a0daacee01126df4_9366/icon-7-boost.jpg' },
        { id: 32, name: 'Adidas Shoes 15', price: 2800000, favourite: false, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5888207e61eb408087f2ad5900dd867c_9366/superstar-shoes.jpg' },
        { id: 33, name: 'Adidas Shoes 1312', price: 5000000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 34, name: 'Adidas Shoes 5322', price: 6000000, favourite: false, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b80ed3b0cd047868bedadbb00fc57d6_9366/five-ten-freerider-mountain-bike-shoes.jpg' },
        { id: 35, name: 'Adidas Shoes 23523', price: 7000000, favourite: false, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/49d1b53655ed44ea8ebeac5b0022f433_9366/shmoofoil-slides.jpg' },
        { id: 36, name: 'Adidas Shoes 4', price: 8000000, favourite: false, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/fb2a411c5dca43d79c76ab680175ea0f_9366/swift-run-shoes.jpg' },
        { id: 37, name: 'Adidas Shoes 4235', price: 9000000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 38, name: 'Adidas Shoes 456', price: 1000000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 39, name: 'Adidas Shoes 23467', price: 1200000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 40, name: 'Adidas Shoes 62468', price: 1300000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 41, name: 'Adidas Shoes 962346', price: 1600000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 42, name: 'Adidas Shoes 624360', price: 1800000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 43, name: 'Adidas Shoes 6243612', price: 1900000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 44, name: 'Adidas Shoes 111', price: 2400000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 45, name: 'Adidas Shoes 123', price: 2500000, favourite: false, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e03ecef81a64126bcecab58011051d8_9366/Giay_Superstar_Bold_trang_FV3336_01_standard.jpg' },
        { id: 46, name: 'Adidas Shoes 123', price: 2600000, favourite: false, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ee470e4fb92f49d5b24cac8e00c28eb7_9366/terrex-swift-r3-gore-tex-hiking-shoes.jpg' },
        { id: 47, name: 'Adidas Shoes 123', price: 2700000, favourite: false, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/6dc535b7f2a243a0a0daacee01126df4_9366/icon-7-boost.jpg' },
        { id: 48, name: 'Adidas Shoes 15', price: 2800000, favourite: false, image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5888207e61eb408087f2ad5900dd867c_9366/superstar-shoes.jpg' },
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