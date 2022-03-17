import { useNavigate } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';
import { BUTTONS_TEXTS, USERNAME } from '../../constants';

import * as Styled from './Header.styles';

export const Header = () => {
	let navigate = useNavigate();

	const handleSubmit = () => {
		localStorage.removeItem('loginToken');
		navigate('/login');
	};

	return (
		<>
			<Logo />
			{localStorage.getItem('loginToken') && (
				<Styled.RightSection>
					<Styled.UserName>{USERNAME}</Styled.UserName>
					<Button
						disabled={false}
						buttonText={BUTTONS_TEXTS.logOut}
						onClick={handleSubmit}
					/>
				</Styled.RightSection>
			)}
		</>
	);
};

// Show user's name if he is logged in.
// When user clicks on Logout button, App should navigate to /login and you should remove token from localStorage.
// Logout button and user's name should not be on Login and Registration pages.
