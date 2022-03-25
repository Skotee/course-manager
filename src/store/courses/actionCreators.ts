import { getAllCoursesApi } from '../../services';
import * as actions from './actionTypes';

export function getAllCoursesAction() {
	return (dispatch: any) => {
		const coursesResult = getAllCoursesApi();
		console.log('coursesResult', coursesResult);
		dispatch(getAllCourses(coursesResult));
	};
}

export function getAllCourses(courses: any) {
	return {
		type: actions.GET_ALL_COURSES,
		payload: courses,
	};
}

export function addCourse(newCourse: any) {
	return {
		type: actions.ADD_COURSE,
		payload: newCourse,
	};
}

export function removeCourse(courseID: number) {
	return {
		type: actions.REMOVE_COURSE,
		payload: courseID,
	};
}

export function updateCourse() {
	return {
		type: actions.UPDATE_COURSE,
	};
}