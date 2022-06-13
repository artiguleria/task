import { SAVEASSMT, REMOVEASSMT } from "./types";

const INITIAL_STATE = [];

const assmt = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SAVEASSMT: {
      return {
        ...state,
        ...payload.data,
      };
    }
    case REMOVEASSMT: {
      return {
        ...state,
        ...INITIAL_STATE,
      };
    }
    default:
      return state;
  }
};

export default assmt;