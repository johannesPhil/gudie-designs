import { GET_ERRORS, CLEAR_ERRORS } from "./types";

export const getErrors = (errMsg, errStatus, actionStatus = null) => (
	dispatch
) => {
	dispatch({
		type: GET_ERRORS,
		payload: { errMsg, errStatus, actionStatus },
	});
};

export const clearErrors = () => (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS,
	});
};
