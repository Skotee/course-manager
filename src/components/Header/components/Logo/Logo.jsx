import styled from '@emotion/styled';

import logo from './logo.png';

const StyledImg = styled.img`
	height: 200px;
`;

export const Logo = () => <StyledImg src={logo} alt='Logo' />;
