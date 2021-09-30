import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import LoginReducer from "./login-reducer";
import DataReducer from "./data-reducer";


const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  login: LoginReducer,
  Record : DataReducer
});

export default persistReducer(persistConfig, rootReducer);
