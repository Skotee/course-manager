import styled from '@emotion/styled';

const StyledButton = styled.button`
	color: turquoise;
	width: 200px;
	height: 100px;
`;

export const Button = ({ onClick, buttonText }) => {
	return <StyledButton onClick={onClick}>{buttonText}</StyledButton>;
};
