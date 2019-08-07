import { createStore } from "redux";

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: 0,
  image: "",
  rent: 0
};

export const CLEAR_STATE = "CLEAR_STATE";
export const INPUT_STATE = "INPUT_STATE";
export const STATE_STEP_ONE = "STATE_STEP_ONE";
export const STATE_STEP_TWO = "STATE_STEP_TWO";
export const STATE_STEP_THREE = "STATE_STEP_THREE";


function reducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_STATE:
      return { ...action.payload, ...initialState };
    case INPUT_STATE:
      return { ...state, ...action.payload };
    case STATE_STEP_ONE:
      return { ...state, ...action.payload };
    case STATE_STEP_TWO:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
