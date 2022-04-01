import { createAction } from '@reduxjs/toolkit';
import * as actions from './actionTypes';

// export function getAllCoursesAction() {
// 	return (dispatch: any) => {
// 		const coursesResult = getAllCoursesApi();
// 		console.log('coursesResult', coursesResult);
// 		dispatch(getAllCourses(coursesResult));
// 	};
// }

// export function getAllCourses(courses: any) {
// 	return {
// 		type: actions.GET_ALL_COURSES,
// 		payload: courses,
// 	};
// }

// export function addCourse(newCourse: any) {
// 	return {
// 		type: actions.ADD_COURSE,
// 		payload: newCourse,
// 	};
// }

// export function removeCourse(courseID: number) {
// 	return {
// 		type: actions.REMOVE_COURSE,
// 		payload: courseID,
// 	};
// }

// export function updateCourse() {
// 	return {
// 		type: actions.UPDATE_COURSE,
// 	};
// }

export const coursesLoaded = createAction(actions.GET_ALL_COURSES);
export const courseSaved = createAction(actions.ADD_COURSE);
export const courseUpdated = createAction(actions.UPDATE_COURSE);
export const courseDeleted = createAction(actions.REMOVE_COURSE);
