import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';

import { Button } from '../../../../common/Button/Button';
import { BUTTONS_TEXTS } from '../../../../constants';
import { removeCourse } from '../../../../store/courses/actionCreators';

import * as Styled from './CourseCard.styles';

interface CourseCardProps {
	title: string;
	duration: number;
	creationDate: Date;
	description: string;
	authors: any;
	id: number;
}

export const CourseCard = ({
	id,
	title,
	duration,
	creationDate,
	description,
	authors,
}: CourseCardProps): JSX.Element => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleDelete = () => {
		console.log('delete');
		dispatch(removeCourse(id));
	};

	return (
		<Styled.Wrapper>
			<Styled.FirstSection>
				<Styled.Title>{title}</Styled.Title>
				<Typography>{description}</Typography>
			</Styled.FirstSection>
			<Styled.SecondSection>
				<Typography>
					<b>Authors: </b>
					<Styled.AuthorsList>{authors}</Styled.AuthorsList>
				</Typography>
				<Typography>
					<b>Duration: </b>
					{duration} hours
				</Typography>
				<Typography>
					<b>Created: </b>
					{creationDate}
				</Typography>
				<br />
				<Styled.ButtonContainer>
					<Button
						disabled={false}
						buttonText={BUTTONS_TEXTS.showCourse}
						onClick={() => navigate(`/courses/${id}`, { replace: true })}
					/>
					<Button
						disabled={false}
						buttonText={'Edit'}
						onClick={() => console.log('edit')}
					/>
					<Button
						disabled={false}
						buttonText={'Del'}
						onClick={handleDelete} // After clicking on the Delete course button a selected course should be deleted from store.
					/>
				</Styled.ButtonContainer>
			</Styled.SecondSection>
		</Styled.Wrapper>
	);
};
