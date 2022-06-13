import { SAVEASSMT, REMOVEASSMT } from "./types";

export const saveAssmt = (payload) => (dispatch) => {
  dispatch({ type: SAVEASSMT, payload });
};

export const removeAssmt = () => (dispatch) => {
  dispatch({ type: REMOVEASSMT });
};
