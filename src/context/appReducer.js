import { ROUTINE_START_TIME } from "./types";

export default (state, action) => {
  switch (action.type) {
    case ROUTINE_START_TIME:
      return {
        ...state,
        routine_start_time: new Date().getTime()
      };
    default:
      return state;
  }
};
