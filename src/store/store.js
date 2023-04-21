import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const loginReducer = (state = { token: "" }, action = { payload: "" }) => {
  let tokenValue = action.payload;
  if (action.type === "login") {
    return {
      token: tokenValue,
    };
  }

  if (action.type === "logout") {
    return {
      token: tokenValue,
    };
  }

  return state;
};

const persistedReducer = persistReducer(persistConfig, loginReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
