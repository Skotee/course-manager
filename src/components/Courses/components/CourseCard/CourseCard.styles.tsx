import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const Wrapper = styled.div`
	display: flex;
	height: 250px;
	width: inherit;
	border: 1px solid #c3c3c3;
	border-radius: 20px;
	margin-bottom: 50px;
	padding: 20px;
`;

export const FirstSection = styled.div`
	width: 70%;
	padding: 20px;
`;

export const SecondSection = styled.div`
	width: 30%;
	padding: 20px;
`;

export const AuthorsList = styled.span`
	text-decoration: none;
	text-overflow: ellipsis;
	display: block;
	overflow: hidden;
	white-space: nowrap;
`;

export const Title = styled(Typography)`
	font-size: 20px;
	padding-bottom: 10px;
`;
