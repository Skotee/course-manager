import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../../../common/Button/Button';
import { BUTTONS_TEXTS } from '../../../../constants';
import { courseDeletedThunk } from '../../../../store/courses/thunk';
import { selectUser } from '../../../../selectors';

import * as Styled from './CourseCard.styles';

interface CourseCardProps {
	title: string;
	duration: number;
	creationDate: Date;
	description: string;
	authors: any;
	id: number;
	isAdmin: boolean;
}

export const CourseCard = ({
	id,
	title,
	duration,
	creationDate,
	description,
	authors,
	isAdmin,
}: CourseCardProps): JSX.Element => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const token = useSelector(selectUser).token;

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
					{isAdmin && (
						<>
							<Button
								disabled={false}
								buttonText={'Edit'}
								onClick={() =>
									navigate(`/courses/update/${id}`, { replace: true })
								}
							/>
							<Button
								disabled={false}
								buttonText={'Del'}
								onClick={() => dispatch(courseDeletedThunk(token, id))} // After clicking on the Delete course button a selected course should be deleted from store.
							/>
						</>
					)}
				</Styled.ButtonContainer>
			</Styled.SecondSection>
		</Styled.Wrapper>
	);
};
