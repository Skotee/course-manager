// Code with reducer for courses
// - Store should have Authors reducer.
// Authors reducer manage data with authors list and should have next model:

// Authors reducer has logic:
// Save a new author.
// Get authors. Save authors to store after getting them from API. See Swagger /authors/all .

import { createReducer } from '@reduxjs/toolkit';

import { authorsLoaded, authorSaved } from './actionCreators';
import { ADD_AUTHOR, GET_ALL_AUTHORS } from './actionTypes';

const authorsInitialState: any[] = []; // default value - empty array. After success getting authors from API - array of authors.

// export default function authorsReducer(
// 	state = authorsInitialState,
// 	action: { type: string; payload: { id: any; name: any } }
// ) {
// 	const { type, payload } = action;

// 	switch (type) {
// 		case ADD_AUTHOR:
// 			return [...state, payload];
// 		case GET_ALL_AUTHORS:
// 			return [...state];
// 		default:
// 			return state;
// 	}
// }

export const authorsReducer = createReducer(authorsInitialState, (builder) => {
	builder
		.addCase(authorsLoaded, (state, action) => {
			return action.payload;
		})
		.addCase(authorSaved, (state, action) => {
			state.push(action.payload);
		});
});

// {
//   id: payload.id ?? uuidv4(),
//   name: payload.name,
// },
