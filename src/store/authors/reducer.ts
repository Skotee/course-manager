// Code with reducer for courses
// - Store should have Authors reducer.
// Authors reducer manage data with authors list and should have next model:

// Authors reducer has logic:
// Save a new author.
// Get authors. Save authors to store after getting them from API. See Swagger /authors/all .

import { v4 as uuidv4 } from 'uuid';

import { ADD_AUTHOR, GET_ALL_AUTHORS } from './actionTypes';

const authorsInitialState: any[] = []; // default value - empty array. After success getting authors from API - array of authors.

export default function authorsReducer(
	state = authorsInitialState,
	action: { type: string; payload: { id: any; name: any } }
) {
	const { type, payload } = action;

	switch (type) {
		case ADD_AUTHOR:
			return [...state, payload];
		case GET_ALL_AUTHORS:
			return [...state];
		default:
			return state;
	}
}

// {
//   id: payload.id ?? uuidv4(),
//   name: payload.name,
// },
