import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

import { Button } from '../../../../common/Button/Button';
import { BUTTONS_TEXTS } from '../../../../constants';

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
	let navigate = useNavigate();

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
				<Button
					disabled={false}
					buttonText={BUTTONS_TEXTS.showCourse}
					onClick={() => navigate(`/courses/${id}`, { replace: true })}
				/>
			</Styled.SecondSection>
		</Styled.Wrapper>
	);
};
