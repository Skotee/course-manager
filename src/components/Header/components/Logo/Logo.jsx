import styled from '@emotion/styled';

import logo from '../../../../assets/logo.png';

const StyledImg = styled.img`
	height: 120px;
`;

export const Logo = () => <StyledImg src={logo} alt='Logo' />;