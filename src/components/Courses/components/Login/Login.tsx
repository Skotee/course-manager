import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loginThunk } from '../../../../store/user/thunk';
import { useAuth } from '../../../../services';
import { Input } from '../../../../common/Input/Input';
import { PLACEHOLDERS, LABELS, BUTTONS_TEXTS } from '../../../../constants';
import * as CommonStyled from '../../../../common/styles';

interface LoginProps {
	onLogin: any;
}

export const Login = ({ onLogin }: LoginProps) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const loginAPI = useAuth('login');

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		console.log('loginUser', { email, password });

		const loginResponse = await loginAPI({ email, password });
		console.log('the user logged in');
		if (loginResponse.successful) {
			const token = loginResponse.result;
			console.log('login thunk called', token);
			dispatch(loginThunk(token));
			onLogin();
			navigate('/courses');
		} else {
			alert(loginResponse.errors);
		}
	};

	return (
		<CommonStyled.Form onSubmit={handleSubmit}>
			<CommonStyled.Title>Login</CommonStyled.Title>
			<Input
				type='email'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setEmail(e.target.value)
				}
				labelText={LABELS.email}
				placeholderText={PLACEHOLDERS.enterEmail}
			/>
			<Input
				type='password'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setPassword(e.target.value)
				}
				labelText={LABELS.password}
				placeholderText={PLACEHOLDERS.enterPassword}
			/>
			<CommonStyled.AuthButton type='submit' buttonText={BUTTONS_TEXTS.login} />
			<CommonStyled.AuthInfo>
				If you don't have an account you can{' '}
				<Link to={'/registration'}>sign up</Link>
			</CommonStyled.AuthInfo>
		</CommonStyled.Form>
	);
};

export default Login;
