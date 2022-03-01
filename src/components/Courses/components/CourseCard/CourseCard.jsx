import { Typography } from '@mui/material';

import { Button } from '../../../../common/Button/Button';
import * as Styled from './CourseCard.styles';

export const CourseCard = ({
	title,
	duration,
	creationDate,
	description,
	authors,
}) => {
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
				<Button buttonText={'Show course'}></Button>
			</Styled.SecondSection>
		</Styled.Wrapper>
	);
};
