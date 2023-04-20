import { createStore } from "redux";

const loginReducer = (state = { token: "" }, action = { payload: "" }) => {
  let tokenValue = action.payload;
  if (action.type === "login") {
    return {
      token: tokenValue, // tu treba staviti vrijednost tokena
    };
  }

  if (action.type === "logout") {
    return {
      token: tokenValue,
    };
  }

  return state;
};

export const store = createStore(loginReducer);
