import styled from '@emotion/styled';
import { Typography } from '@mui/material';

import Button from './Button';

export const Title = styled(Typography)`
	font-size: 20px;
	padding-bottom: 10px;
	text-align: center;
`;

export const AuthButton = styled(Button)`
	border: 5px solid rgba(0, 0, 0, 0.5);
`;

export const AuthInfo = styled(Typography)`
	text-align: center;
	margin-top: 15px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
