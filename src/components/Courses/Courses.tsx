import { SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

import { getCourseAuthorsName } from '../../helpers/getCoursesAuthorsName';
import { Button } from '../../common/Button/Button';
import { CourseCard } from './components/CourseCard/CourseCard';
import { BUTTONS_TEXTS, ERRORS } from '../../constants';
import { SearchBar } from './components/Searchbar/Searchbar';
import { HorizontalWrapper } from '../../layout/wrappers/HorizontalWrapper.styles';

interface CoursesProps {
	coursesList: any;
}

export const Courses = ({ coursesList }: CoursesProps): JSX.Element => {
	const [searchedCourse, setSearchedCourse] = useState('');
	const [courses, setCourses] = useState(coursesList);
	let navigate = useNavigate();

	const handleInputChange = (e: {
		target: { value: SetStateAction<string> };
	}) => {
		setSearchedCourse(e.target.value);
		e.target.value === '' && setCourses(coursesList);
	};

	const handleSearch = () => {
		setCourses(filterCoursesBySearchName());
	};

	const filterCoursesBySearchName = () => {
		const courseArr = coursesList.filter(
			(course: { title: string; id: string }) => {
				return (
					course.title.toLowerCase().includes(searchedCourse.toLowerCase()) ||
					course.id.toLowerCase().includes(searchedCourse.toLowerCase())
				);
			}
		);
		return courseArr;
	};

	return (
		<>
			<HorizontalWrapper>
				<SearchBar
					value={searchedCourse}
					onChange={handleInputChange}
					onClick={handleSearch}
				/>
				<Button
					onClick={() => navigate('/courses/add', { replace: true })}
					buttonText={BUTTONS_TEXTS.addNewCourse}
				></Button>
			</HorizontalWrapper>
			{courses.length ? (
				courses.map((course: any) => (
					<CourseCard
						key={course.id}
						id={course.id}
						title={course.title}
						duration={course.duration}
						creationDate={course.creationDate}
						description={course.description}
						authors={getCourseAuthorsName(course.authors)}
					/>
				))
			) : (
				<Typography>{ERRORS.noSuchCourse}</Typography>
			)}
		</>
	);
};

// Component CreateCourse should be opened by router /courses/add.
// When user clicks on Create course button, App navigates to /courses
// (the new course should be in the course list in Courses component).
