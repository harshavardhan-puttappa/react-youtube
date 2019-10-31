import { HANDLE_FORM, ON_SELECT } from "../types";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case HANDLE_FORM:
      return {
        ...state,
        videosList: payload,
        displayedVideo: payload[1]
      };

    case ON_SELECT:
      return {
        ...state,
        displayedVideo: payload
      };

    default:
      return state;
  }
};
