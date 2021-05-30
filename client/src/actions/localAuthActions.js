import axios from "axios";

import {
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	// LOGOUT_SUCCESS,
	// LOGOUT_ERROR,
	// USER_LOADED,
	// ADMIN_LOADED,
	CLIENT_LOADED,
	AUTH_ERROR,
} from "./types.js";
import { getErrors } from "./errorActions";

export const loginAdmin = (user) => (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	axios
		.post("/api/login/admin", user, config)
		.then((res) => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch(
				getErrors(err.response.data.msg, err.response.status, "LOGIN_FAIL")
			);
			dispatch({
				type: LOGIN_ERROR,
			});
		});
};

export const loadUser = () => (dispatch, getState) => {
	axios
		.get("/api/login/client", setToken(getState))
		.then((res) => {
			dispatch({
				type: CLIENT_LOADED,
				payload: res.data,
			});
		})
		.catch((err) => {
			console.log(err);
			dispatch(
				getErrors(err.response.data.msg, err.response.status, err.response.id)
			);

			dispatch({
				type: AUTH_ERROR,
			});
		});
};

const setToken = (getState) => {
	const token = getState().localAuth.token;

	const config = {
		headers: {
			"Content-type": "application/json",
		},
	};

	if (token) config.headers["x-auth-token"] = token;

	return config;
};
