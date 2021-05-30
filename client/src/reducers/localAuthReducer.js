import {
	LOGIN_ERROR,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	CLIENT_LOADED,
	LOADING_USER,
} from "./../actions/types";

const initialState = {
	token: localStorage.getItem("gudie__token"),
	client: null,
	isAuthenticated: null,
	isLoading: false,
};

export const localAuthReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CLIENT_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				client: payload.client,
			};

		case LOADING_USER:
			return {
				...state,
				isLoading: true,
			};

		case LOGIN_SUCCESS:
			localStorage.setItem("gudie__token", payload.token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				isLoading: false,
			};

		case AUTH_ERROR:
		case LOGIN_ERROR:
			// case LOGOUT_SUCCESS:
			// case REGISTER_FAIL:
			localStorage.removeItem("gudie__token");
			return {
				...state,
				token: null,
				isAuthenticated: false,
				user: null,
				isLoading: false,
			};

		default:
			return state;
	}
};
