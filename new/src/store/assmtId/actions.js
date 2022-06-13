import { SAVEASSMTID, REMOVEASSMTID } from "./types";

export const saveAssmtId = (payload) => (dispatch) => {
  console.log(payload);
  dispatch({ type: SAVEASSMTID, payload });
};

export const removeAssmtId = () => (dispatch) => {
  dispatch({ type: REMOVEASSMTID });
};
