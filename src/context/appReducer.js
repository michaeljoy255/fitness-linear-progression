import { START_TIMER, ROUTINE_TIMER, RESET_TIMER } from "./types";

export default (state, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        routine_start_time: new Date().getTime()
      };
    case ROUTINE_TIMER:
      return {
        ...state,
        routine_timer: action.payload.currentTime - action.payload.startTime,
        timer_id: action.payload.timerId
      };
    case RESET_TIMER:
      return {
        ...state,
        timer_id: null
      };
    default:
      return state;
  }
};
