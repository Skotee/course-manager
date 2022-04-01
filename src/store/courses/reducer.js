// Code with reducer for courses

// Store should have Courses reducer.
// Courses reducer manage data with courses list and should have next model:

// Courses reducer has logic:
// Save new course.
// Delete course.
// Update course.
// Get courses. Save courses to store after getting them from API. See Swagger /courses/all
import { createReducer } from '@reduxjs/toolkit';
import {
	coursesLoaded,
	courseSaved,
	courseUpdated,
	courseDeleted,
} from './actionCreators';
import {
	ADD_COURSE,
	REMOVE_COURSE,
	GET_ALL_COURSES,
	UPDATE_COURSE,
} from './actionTypes';

const coursesInitialState = []; // default value - empty array. After success getting courses from API - array of courses.

// export default function coursesReducer(state = coursesInitialState, action) {
// 	const { type, payload } = action;

// 	switch (type) {
// 		case GET_ALL_COURSES:
// 			console.log('state reducer', state);
// 			console.log('payload reducer', payload);

// 			return [...state];

// 		case ADD_COURSE:
// 			if (Array.isArray(payload)) {
// 				return [...state, ...payload];
// 			} else return [...state, payload];

// 		case REMOVE_COURSE:
// 			return state.filter((e) => e.id !== payload.id);

// 		case UPDATE_COURSE:
// 			return state.map((e) => (e.id === payload.id ? { ...e, ...payload } : e));

// 		default:
// 			return state;
// 	}
// }
export const coursesReducer = createReducer(coursesInitialState, (builder) => {
	builder
		.addCase(coursesLoaded, (state, action) => {
			return action.payload;
		})
		.addCase(courseSaved, (state, action) => {
			state.push(action.payload);
		})
		.addCase(courseUpdated, (state, action) => {
			let courseIndex = state.findIndex(
				(course) => course.id === action.payload.id
			);
			if (courseIndex > -1) {
				state[courseIndex] = { ...action.payload };
			}
		})
		.addCase(courseDeleted, (state, action) => {
			let courseIndex = state.findIndex(
				(course) => course.id === action.payload
			);
			if (courseIndex > -1) {
				state.splice(courseIndex, 1);
			}
		});
});

// isAuth: true,
// name: localStorage.getItem('username'),
// email: payload.email,
// token: localStorage.getItem('loginToken'),