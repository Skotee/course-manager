// Code with actions

import * as actions from './actionTypes';

export function LOG_IN(description: any) {
	return {
		type: actions.LOG_IN,
		payload: description,
	};
}

export function LOG_OUT() {
	return {
		type: actions.LOG_OUT,
	};
}
