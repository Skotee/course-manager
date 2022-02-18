import styled from '@emotion/styled';
import { Button } from '../../../../common/Button/Button';

// const StyledButton = styled.button`
// 	color: turquoise;
// 	width: 200px;
// 	height: 100px;
// `;

export const CourseCard = ({
	title,
	duration,
	creationDate,
	description,
	authors,
}) => {
	return (
		<>
			<div>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div>
				<p>
					<b>Authors</b>
					{authors}
				</p>
				<p>
					<b>Duration:</b>
					{duration} hours
				</p>
				<p>
					<b>Created:</b>
					{creationDate}
				</p>
				<Button>Show course</Button>
			</div>
		</>
	);
};
