import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
  currentComponent: "Enroll",
  name: "",
  age: 0,
};

export const changeComponent = (state = initialState, action) => {
  switch (action.type) {
    case "CHAT":
      return {
        ...state,
        currentComponent: "Chat",
      };
    case "FINAL":
      return {
        ...state,
        currentComponent: "Final",
        name: action.name,
        age: action.age,
      };

    case "ENROLL":
      return {
        ...state,
        currentComponent: "Enroll",
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  changeComponent,
});

export default rootReducer;
