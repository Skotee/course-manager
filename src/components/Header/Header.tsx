import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';
import { BUTTONS_TEXTS } from '../../constants';
import { selectUser, selectUserName } from '../../selectors';
import { logoutThunk } from '../../store/user/thunk';

import * as Styled from './Header.styles';

interface PrivateRouterProps {
	onLogout: any;
	isLoggedIn: any;
}

export const Header: FC<PrivateRouterProps> = ({ onLogout, isLoggedIn }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const userName =
		useSelector(selectUserName) || localStorage.getItem('username');
	const token = useSelector(selectUser).token;

	const handleSubmit = () => {
		dispatch(logoutThunk(token));
		onLogout();
		navigate('/login');
	};

	return (
		<>
			<Logo />
			{isLoggedIn && (
				<Styled.RightSection>
					<Styled.UserName>{userName}</Styled.UserName>
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
