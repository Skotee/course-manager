// Code with reducer for user

// const userInitialState = {
// 	isAuth: boolean, // default value - false. After success login - true
// 	name: string, // default value - empty string. After success login - name of user
// 	email: string, // default value - empty string. After success login - email of user
// 	token: string, // default value - empty string or token value from localStorage.
// 	// After success login - value from API /login response. See Swagger.
// };

// After success login isAuth property have value true, save token, email and name.
// After logout isAuth property have value false, token, email and name have value as empty string.
// Clean localStorage.

// User reducer has logic:
// After success login isAuth property have value true, save token, email and name.
// After logout isAuth property have value false, token, email and name have value as empty string.
// Clean localStorage

import { LOG_IN, LOG_OUT } from './actionTypes';

const userInitalState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export default function userReducer(state = userInitalState, action: any) {
	const { type, payload } = action;

	switch (type) {
		case LOG_IN:
			return {
				isAuth: true,
				name: payload.user.name,
				email: payload.user.email,
				token: payload.result,
			};
		case LOG_OUT:
			localStorage.clear();
			return {
				isAuth: false,
				name: '',
				email: '',
				token: '',
			};
		default:
			return state;
	}
}
// if (action.type === actions.LOG_IN) {
// 	return {
// 		isAuth: true,
// 		name: localStorage.getItem('username'),
// 		email: action.payload.email,
// 		token: localStorage.getItem('loginToken'),
// 	};
// } else if (action.type === actions.LOG_OUT) {
// 	return;
// } else {
// 	return state;
// }
