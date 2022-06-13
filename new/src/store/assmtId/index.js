import { SAVEASSMTID, REMOVEASSMTID } from "./types";

const INITIAL_STATE = {};

const assmtId = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SAVEASSMTID: {
      return {
        ...state,
        payload,
      };
    }
    case REMOVEASSMTID: {
      return {
        ...state,
        ...INITIAL_STATE,
      };
    }
    default:
      return state;
  }
};

export default assmtId;