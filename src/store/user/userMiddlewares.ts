import { userActionTypes } from './actionTypes';

export const loginLogoutMiddleware =
	(storeAPI: any) =>
	(next: (arg0: any) => any) =>
	(action: { type: string; payload: { token: string; name: string } }) => {
		if (action.type === userActionTypes.LOGOUT) {
			localStorage.clear();
		}
		if (action.type === userActionTypes.LOGIN) {
			localStorage.setItem('token', action.payload.token);
			localStorage.setItem('username', action.payload.name);
		}

		return next(action);
	};
