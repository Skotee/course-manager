import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const Textarea = styled.textarea`
	max-height: 150px;
	min-height: 60px;
	width: 100%;
	max-width: 100%;
	min-width: 80%;
`;

export const AddAuthorContainer = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: auto auto;
	grid-gap: 10px;
	justify-items: center;
	border: 1px solid black;
	padding: 20px;
	height: auto;
`;

export const TwoColumnsContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Form = styled.form`
	width: inherit;
`;

export const CenterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-self: flex-start;
`;

export const ListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline-start: 0px;
`;

export const AuthorName = styled(Typography)`
	margin-right: 35px;
`;

export const SectionHeader = styled(Typography)`
	text-align: center;
	font-weight: bold;
`;
