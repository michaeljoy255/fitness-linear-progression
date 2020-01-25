import { SET_START_TIME } from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_START_TIME:
      return {
        ...state,
        current: { startedAt: action.payload }
      };
    default:
      return state;
  }
};
