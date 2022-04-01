// Code with actions

import { createAction } from '@reduxjs/toolkit';
import { userActionTypes } from './actionTypes';

// export function login(description: any) {
// 	return {
// 		type: actions.LOG_IN,
// 		payload: description,
// 	};
// }

// export function logout() {
// 	return {
// 		type: actions.LOG_OUT,
// 	};
// }

export const login = createAction(userActionTypes.LOGIN);
export const logout = createAction(userActionTypes.LOGOUT);
