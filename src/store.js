import { createStore } from "redux";
import rootReducer from "./stores/reducer/rootReducer";;

const store = createStore(rootReducer)
export default store;