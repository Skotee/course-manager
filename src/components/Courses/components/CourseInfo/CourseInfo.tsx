import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

import { getCourseAuthorsName } from '../../../../helpers/getCoursesAuthorsName';
import { Button } from '../../../../common/Button/Button';
import { BUTTONS_TEXTS } from '../../../../constants';
import { getAuthorsList, getCoursesList } from '../../../../selectors';

import * as Styled from './CourseInfo.styles';

export const CourseInfo: React.FC = () => {
	const { courseId } = useParams();
	const navigate = useNavigate();
	const authorsList = useSelector(getAuthorsList);
	const coursesList = useSelector(getCoursesList);

	const selectedCourse = coursesList.find(
		(course: { id: string | undefined }) => course.id === courseId
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
							{getCourseAuthorsName(selectedCourse?.authors, authorsList)}
						</Styled.AuthorsList>
					</Typography>
				</Styled.SecondSection>
			</Styled.Content>
		</Styled.Wrapper>
	);
};
