import { createSelector } from '@reduxjs/toolkit';

export const selectUserName = (state: any) => state.user.name;
export const selectIsLoggedIn = (state: any) => state.user.isAuth;
export const selectUser = (state: any) => state.user;
export const selectIsAdminRole = createSelector(
	selectUser,
	(state) => state.role === 'admin'
);

export const selectCourses = (state: any) => state.courses;
export const selectAuthors = (state: any) => state.authors;

export const searchCoursesByNameId = (search: string) =>
	createSelector(selectCourses, (courses) =>
		courses?.filter(
			(course: any) =>
				course.title.toLowerCase().includes(search.toLowerCase()) ||
				course.id.toLowerCase().includes(search.toLowerCase())
		)
	);

export const searchCoursesById = (id: any) =>
	createSelector(selectCourses, (courses) =>
		courses.find((course: any) => course.id.toLowerCase() === id)
	);
