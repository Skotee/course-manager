// Code with actions

import { createAction } from '@reduxjs/toolkit';
import {
	ADD_AUTHOR,
	GET_ALL_AUTHORS,
	LOAD_AUTHORS,
	SAVE_AUTHORS,
} from './actionTypes';

// export const addAuthor = (newAuthor: any) => {
// 	return {
// 		type: ADD_AUTHOR,
// 		payload: newAuthor,
// 	};
// };

// export const getAllAuthors = (data: any) => {
// 	return {
// 		type: GET_ALL_AUTHORS,
// 		payload: data,
// 	};
// };

export const authorsLoaded = createAction(LOAD_AUTHORS);
export const authorSaved = createAction(SAVE_AUTHORS);
