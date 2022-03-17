import styled from '@emotion/styled';

export const Input = styled.input`
	background: 0;
	outline: none;
	height: 2em;
	width: 100%;
	max-width: 400px;
	font-size: 1.2em;
	transition: padding 0.3s 0.2s ease;

	&:focus {
		box-shadow: 0 0 1em gold;
	}
`;
