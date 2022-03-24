import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../../../../common/Input/Input';
import { PLACEHOLDERS, LABELS, BUTTONS_TEXTS } from '../../../../constants';
import * as CommonStyled from '../../../../common/styles';

export const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const registerUser = async () => {
				const requestOptions = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ name, password, email }),
				};
				const response = await fetch(
					'http://localhost:3000/register',
					requestOptions
				);
				const data = await response.json();
				if (data.successful) {
					navigate('/login');
					return;
				} else {
					const errorMessage = `An error has occured: ${data.errors[0]}`;
					throw new Error(errorMessage);
				}
			};
			registerUser();
		} catch (error) {
			console.error('There was an error!', error);
		}
	};

	return (
		<CommonStyled.Form
			onSubmit={handleSubmit}
			action='http://localhost:3001/registration'
			method='post'
		>
			<CommonStyled.Title>Registration</CommonStyled.Title>
			<Input
				type='text'
				labelText={LABELS.name}
				placeholderText={PLACEHOLDERS.enterName}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setName(e.target.value)
				}
			></Input>
			<Input
				type='email'
				labelText={LABELS.email}
				placeholderText={PLACEHOLDERS.enterEmail}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setEmail(e.target.value)
				}
			></Input>
			<Input
				type='password'
				minlength={6}
				labelText={LABELS.password}
				placeholderText={PLACEHOLDERS.enterPassword}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setPassword(e.target.value)
				}
			></Input>
			<CommonStyled.AuthButton
				type='submit'
				// onClick={() => console.log('sds')}
				buttonText={BUTTONS_TEXTS.registration}
			/>
			<CommonStyled.AuthInfo>
				If you have account you can <Link to={'/login'}>Login</Link>
			</CommonStyled.AuthInfo>
		</CommonStyled.Form>
	);
};

export default Registration;
