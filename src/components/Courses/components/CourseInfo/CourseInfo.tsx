import { useNavigate, useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

import { getCourseAuthorsName } from '../../../../helpers/getCoursesAuthorsName';
import { Button } from '../../../../common/Button/Button';
import { BUTTONS_TEXTS } from '../../../../constants';
import { mockedCoursesList } from '../../../../constants';

import * as Styled from './CourseInfo.styles';

export const CourseInfo: React.FC = () => {
	const { courseId } = useParams();
	let navigate = useNavigate();

	const selectedCourse = mockedCoursesList.find(
		(course) => course.id === courseId
	);

	return (
		<Styled.Wrapper>
			<Button
				onClick={() => navigate('/courses', { replace: true })}
				buttonText={BUTTONS_TEXTS.backToCourses}
			/>
			<Styled.Content>
				<Styled.Title>{selectedCourse?.title}</Styled.Title>
				<Styled.FirstSection>
					<Typography>{selectedCourse?.description}</Typography>
				</Styled.FirstSection>
				<Styled.SecondSection>
					<Typography>
						<b>ID: </b>
						{selectedCourse?.id}
					</Typography>
					<Typography>
						<b>Duration: </b>
						{selectedCourse?.duration} hours
					</Typography>
					<Typography>
						<b>Created: </b>
						{selectedCourse?.creationDate}
					</Typography>
					<Typography>
						<b>Authors: </b>
						<Styled.AuthorsList>
							{getCourseAuthorsName(selectedCourse?.authors)}
						</Styled.AuthorsList>
					</Typography>
				</Styled.SecondSection>
			</Styled.Content>
		</Styled.Wrapper>
	);
};
