import { EXAMPLE_ACTION } from "./types";

export default (state, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      console.log("Example action ran!");
      return { ...state };
    default:
      return state;
  }
};
