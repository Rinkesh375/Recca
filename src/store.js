import  {applyMiddleware,combineReducers,legacy_createStore} from "redux"
import { thunk } from "redux-thunk";
import productReducer from "./redux/productReducer";

const rootReducer = combineReducers({productReducer})
export  const  store = legacy_createStore(rootReducer,applyMiddleware(thunk));