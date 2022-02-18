import styled from '@emotion/styled';
import { Button } from '../../common/Button/Button';

import { Logo } from './components/Logo/Logo';

// const StyledImg = styled.img`
// 	height: 200px;
// `;

export const Header = () => {
	return (
		<>
			<Logo />
			<p>Robert</p>
			<Button>LOG OUT</Button>
		</>
	);
};
