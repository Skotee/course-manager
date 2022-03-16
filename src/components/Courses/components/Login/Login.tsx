import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../../../../common/Input/Input';
import { PLACEHOLDERS, LABELS, BUTTONS_TEXTS } from '../../../../constants';
import * as CommonStyled from '../../../../common/styles';

export const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	let navigate = useNavigate();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const loginUser = async () => {
				const requestOptions = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ email, password }),
				};
				const response = await fetch(
					'http://localhost:3000/login',
					requestOptions
				);
				const data = await response.json();
				if (data.successful) {
					localStorage.setItem('loginToken', data.result);
					navigate('/courses');
					return;
				} else {
					const errorMessage = `An error has occured: ${data.errors[0]}`;
					throw new Error(errorMessage);
				}
			};
			loginUser();
		} catch (error) {
			console.error('There was an error!', error);
		}
	};
	return (
		<CommonStyled.Form
			onSubmit={handleSubmit}
			action='http://localhost:3001/login'
			method='post'
		>
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
