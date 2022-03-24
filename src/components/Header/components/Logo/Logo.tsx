import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import logo from '../../../../assets/logo.png';

const StyledImg = styled.img`
	height: 120px;
`;

export const Logo = () => {
	const navigate = useNavigate();

	return (
		<StyledImg
			src={logo}
			alt='Logo'
			onClick={() => navigate('/', { replace: true })}
		/>
	);
};
