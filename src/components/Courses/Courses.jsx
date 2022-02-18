import styled from '@emotion/styled';
import { Button } from '../../common/Button/Button';
import { CourseCard } from './components/CourseCard/CourseCard';

import { mockedCoursesList, mockedAuthorsList } from '../../constants';
import { Input } from '../../common/Input/Input';

// const StyledImg = styled.img`
// 	height: 200px;
// `;

export const Courses = (props) => {
	const numbers = props.numbers;
	const courseCard = mockedCoursesList.map((number) => (
		<CourseCard key={number.toString()} value={number} />
	));
	return (
		<>
			<Input />
			<CourseCard />
			<Button> sds</Button>
		</>
	);
};
