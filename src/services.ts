import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import store from './store/index';
// import { getAllCourses } from './store/courses/actionCreators';

export const url = 'http://localhost:3000';
// (Create api service for each endpoint that you use and call methods or functions from service into your components.)
// export const getAllCoursesApi = () => {
// 	const dispatch = store.dispatch;
// 	axios
// 		.get('http://localhost:3000/courses/all')
// 		.then((response) => dispatch(getAllCourses(response)))
// 		.catch((err) => console.warn(err));
// };

export const useAuth = (method: any) => {
	const post = useCallback(
		async (data) => {
			const request = await fetch(`${url}/${method}`, {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const result = await request.json();
			return result;
		},
		[method]
	);

	return post;
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

export const useCourses = () => {
	const [coursesData, setCoursesData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	useEffect(() => {
		const fetchCourses = async () => {
			setIsError(false);
			setIsLoading(true);
			try {
				const response = await fetch(`${url}/courses/all`);
				const requestResult = await response.json();
				console.log('requestResult', requestResult);
				setCoursesData(requestResult.result);
			} catch (e) {
				setIsError(true);
			}
			setIsLoading(false);
		};
		fetchCourses();
	}, []);

	return [coursesData, isLoading, isError];
};

export const useAuthors = () => {
	const [coursesData, setCoursesData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	useEffect(() => {
		const fetchCourses = async () => {
			setIsError(false);
			setIsLoading(true);
			try {
				const response = await fetch(`${url}/authors/all`);
				const requestResult = await response.json();
				setCoursesData(requestResult.result);
			} catch (e) {
				setIsError(true);
			}
			setIsLoading(false);
		};
		fetchCourses();
	}, []);

	return [coursesData, isLoading, isError];
};
