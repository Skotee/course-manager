// Code with reducer for courses

// Store should have Courses reducer.
// Courses reducer manage data with courses list and should have next model:

// Courses reducer has logic:
// Save new course.
// Delete course.
// Update course.
// Get courses. Save courses to store after getting them from API. See Swagger /courses/all
import {
	ADD_COURSE,
	REMOVE_COURSE,
	GET_ALL_COURSES,
	UPDATE_COURSE,
} from './actionTypes';

const coursesInitialState: any[] = []; // default value - empty array. After success getting courses from API - array of courses.

export default function coursesReducer(
	state = coursesInitialState,
	action: { payload: any; type?: any }
) {
	const { type, payload } = action;
	console.log('payload', payload);

	switch (type) {
		case GET_ALL_COURSES:
			return {
				...state,
				payload,
			};

		case ADD_COURSE:
			if (Array.isArray(payload)) {
				return [...state, ...payload];
			} else return [...state, payload];

		case REMOVE_COURSE:
			return state.filter((e) => e.id !== payload.id);

		case UPDATE_COURSE:
			return state.map((e) => (e.id === payload.id ? { ...e, ...payload } : e));

		default:
			return state;
	}
}

// isAuth: true,
// name: localStorage.getItem('username'),
// email: payload.email,
// token: localStorage.getItem('loginToken'),
