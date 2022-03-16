import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const Wrapper = styled.div`
	width: inherit;
	border: 1px solid #c3c3c3;
	border-radius: 20px;
	margin-bottom: 50px;
	padding: 20px;
`;

export const FirstSection = styled.div`
	padding: 20px;
	grid-area: Desc;
`;

export const SecondSection = styled.div`
	grid-area: Spec;
	padding: 20px;
`;

export const AuthorsList = styled.span`
	// text-decoration: none;
	// text-overflow: ellipsis;
	// display: block;
	// overflow: hidden;
	// white-space: nowrap;
`;

export const Title = styled(Typography)`
	grid-area: Title;
	font-size: 25px;
	padding-bottom: 10px;
	text-align: center;
`;

export const Content = styled.div`
	display: grid;
	grid-template-columns: 0.7fr 0.3fr;
	grid-template-rows: 0.1fr 0.5fr 1fr;
	gap: 0px 0px;
	grid-template-areas:
		'Button .'
		'Title Title'
		'Desc Spec';
`;
