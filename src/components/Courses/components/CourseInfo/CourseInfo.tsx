import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

import { getCourseAuthorsName } from '../../../../helpers/getCoursesAuthorsName';
import { Button } from '../../../../common/Button/Button';
import { BUTTONS_TEXTS } from '../../../../constants';
import { selectAuthors, searchCoursesById } from '../../../../selectors';

import * as Styled from './CourseInfo.styles';

export const CourseInfo: React.FC = () => {
	const { courseId } = useParams();
	const navigate = useNavigate();
	const authorsList = useSelector(selectAuthors);
	const coursesList = useSelector(searchCoursesById(courseId));

	const courseAuthors = coursesList.authors.map((id: any) => {
		return authorsList.find((author: { id: any }) => author.id === id)?.name;
	});

	return (
		<Styled.Wrapper>
			<Button
				onClick={() => navigate('/courses', { replace: true })}
				buttonText={BUTTONS_TEXTS.backToCourses}
			/>
			<Styled.Content>
				<Styled.Title>{courseAuthors?.title}</Styled.Title>
				<Styled.FirstSection>
					<Typography>{courseAuthors?.description}</Typography>
				</Styled.FirstSection>
				<Styled.SecondSection>
					<Typography>
						<b>ID: </b>
						{courseAuthors?.id}
					</Typography>
					<Typography>
						<b>Duration: </b>
						{courseAuthors?.duration} hours
					</Typography>
					<Typography>
						<b>Created: </b>
						{courseAuthors?.creationDate}
					</Typography>
					<Typography>
						<b>Authors: </b>
						<Styled.AuthorsList>{courseAuthors.join(', ')}</Styled.AuthorsList>
					</Typography>
				</Styled.SecondSection>
			</Styled.Content>
		</Styled.Wrapper>
	);
};
