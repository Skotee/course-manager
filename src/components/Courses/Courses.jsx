import { Typography } from '@mui/material';
import { useState } from 'react';

import { Button } from '../../common/Button/Button';
import { CourseCard } from './components/CourseCard/CourseCard';
import { ERRORS } from '../../constants';
import { SearchBar } from './components/Searchbar/Searchbar';
import { HorizontalWrapper } from '../../layout/wrappers/HorizontalWrapper.styles';

export const Courses = ({ authorsList, coursesList, onClick }) => {
	const [searchedCourse, setSearchedCourse] = useState('');
	const [courses, setCourses] = useState(coursesList);
	// const [filteredCourses, setFilteredCourses] = useState();

	const getCourseAuthorsName = (authorsList, courseAuthorsIDs) => {
		const authorsListArray = authorsList
			.filter((author) => courseAuthorsIDs.includes(author.id))
			.map((author) => author.name)
			.join(', ');
		return authorsListArray;
	};

	const handleInputChange = (e) => {
		setSearchedCourse(e.target.value);
		e.target.value === '' && setCourses(coursesList);
	};

	const handleSearch = () => {
		setCourses(filterCoursesBySearchName());
	};

	const filterCoursesBySearchName = () => {
		const courseArr = coursesList.filter((course) => {
			return (
				course.title.toLowerCase().includes(searchedCourse.toLowerCase()) ||
				course.id.toLowerCase().includes(searchedCourse.toLowerCase())
			);
		});
		return courseArr;
	};

	return (
		<>
			{/* TODO sth is making error here, because of course length probably */}
			<HorizontalWrapper>
				<SearchBar
					value={searchedCourse}
					onChange={handleInputChange}
					onClick={handleSearch}
				/>
				<Button onClick={onClick} buttonText={'Add new course'}></Button>
			</HorizontalWrapper>
			{courses.length ? (
				courses.map((course) => (
					<CourseCard
						key={course.id}
						title={course.title}
						duration={course.duration}
						creationDate={course.creationDate}
						description={course.description}
						authors={getCourseAuthorsName(authorsList, course.authors)}
					/>
				))
			) : (
				<Typography>{ERRORS.noSuchCourse}</Typography>
			)}
		</>
	);
};
