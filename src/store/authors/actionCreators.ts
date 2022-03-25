// Code with actions

import { ADD_AUTHOR, GET_ALL_AUTHORS } from './actionTypes';

export const addAuthor = (newAuthor: any) => {
	return {
		type: ADD_AUTHOR,
		payload: newAuthor,
	};
};

export const getAllAuthors = (data: any) => {
	return {
		type: GET_ALL_AUTHORS,
		payload: data,
	};
};
