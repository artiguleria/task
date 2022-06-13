import { LOGIN, LOGOUT } from "./types";

const INITIAL_STATE = {
  isAuthenticated: false,
  token: null,
};

const auth = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOGIN: {
      return {
        ...state,
        isAuthenticated: true,
        token: payload.data.token,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        ...INITIAL_STATE,
      };
    }
    default:
      return state;
  }
};

export default auth;
