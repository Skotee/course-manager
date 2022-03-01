import * as Styled from './Header.styles';
import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';

export const Header = () => {
	return (
		<>
			<Logo />
			<Styled.RightSection>
				<Styled.UserName>Robert</Styled.UserName>
				<Button
					buttonText={'LOG OUT'}
					onClick={() => {
						alert('You have successfully logged out.');
					}}
				></Button>
			</Styled.RightSection>
		</>
	);
};
