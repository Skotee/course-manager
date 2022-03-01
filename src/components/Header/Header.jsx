import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';
import { ALERTS, BUTTONS_TEXTS, USERNAME } from '../../constants';

import * as Styled from './Header.styles';

export const Header = () => {
	return (
		<>
			<Logo />
			<Styled.RightSection>
				<Styled.UserName>{USERNAME}</Styled.UserName>
				<Button
					buttonText={BUTTONS_TEXTS.logOut}
					onClick={() => {
						alert(ALERTS.logOut);
					}}
				></Button>
			</Styled.RightSection>
		</>
	);
};
