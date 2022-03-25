// - All functionality with back-end should be in services.js.

import axios from 'axios';
import store from './store/index';
import { getAllCourses } from './store/courses/actionCreators';

// (Create api service for each endpoint that you use and call methods or functions from service into your components.)
export const getAllCoursesApi = () => {
	const dispatch = store.dispatch;
	axios
		.get('http://localhost:3000/courses/all')
		.then((response) => console.log('sds', response.data.result))
		.then((response) => dispatch(getAllCourses(response)))
		.catch((err) => console.warn(err));
};

export const logOut = (token: string) => {
	const headers = { Authorization: token };
	return axios
		.delete(`'http://localhost:3000/logout`, {
			headers,
		})
		.catch((e) => console.warn(e));
};

export const removeCourse = (courseID: any, token: string) => {
	const headers = { Authorization: token };
	axios
		.delete(`http://localhost:3000/courses/${courseID}`, { headers })
		.catch((e) => console.warn(e));
};
