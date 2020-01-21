import { SET_START_TIME, RESET_TIME, SET_TIMER_ID } from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_START_TIME:
      return {
        ...state,
        routine_start_time: new Date().getTime()
      };
    case RESET_TIME:
      return {
        ...state,
        routine_start_time: 0,
        timer_id: null
      };
    case SET_TIMER_ID:
      return {
        ...state,
        timer_id: action.payload
      };
    default:
      return state;
  }
};
