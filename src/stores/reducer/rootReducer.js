
import userReducer from './userReducer';
import productReducer from './productReduce'
import favouriteReducer from './favouriteReducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers(
    {
        user: userReducer,
        favourite: favouriteReducer,
        product: productReducer
    }
)

export default rootReducer;
