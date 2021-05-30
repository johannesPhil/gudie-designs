import { CLEAR_ERRORS, GET_ERRORS } from "./../actions/types";

const initialState = {
	errMsg: {},
	errStatus: null,
	actionStatus: null,
};

export const errorReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_ERRORS:
			return {
				errMsg: payload.errMsg,
				errStatus: payload.errStatus,
				actionStatus: payload.actionStatus,
			};

		case CLEAR_ERRORS:
			return {
				errMsg: {},
				errStatus: null,
				actionStatus: null,
			};
		default:
			return state;
	}
};
