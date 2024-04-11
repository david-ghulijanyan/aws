import React, { FC, useEffect, useState } from 'react';
import { Form } from '../form';
import { Button } from '../button';
import { Input } from '../input';
import { useMutation } from '@apollo/client';
import { SIGN_UP_MUTATION } from './_modifications';
import { useNavigate } from 'react-router-dom';

export const SignUp: FC = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();

	const [signUp, { data, loading, error: mutationError }] = useMutation(SIGN_UP_MUTATION);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		signUp({
			variables: {
				username,
				email,
				password,
				firstName,
				lastName,
			},
		});
	};

	useEffect(() => {
		if (data && data.statusCode === 200) {
			navigate('/');
		} else {
			if (mutationError) {
				setError(mutationError.message);
			} else if (data?.message) {
				setError(data);
			}
		}
	}, [data, navigate, mutationError]);

	return (
		<Form onSubmit={handleSubmit}>
			{error && <p>{error}</p>}
			<Input
				variant="primary"
				value={username}
				onChange={setUsername}
				type="text"
				placeholder="Username"
			/>
			<Input
				variant="primary"
				value={email}
				onChange={setEmail}
				type="email"
				placeholder="Email"
			/>
			<Input
				variant="primary"
				value={password}
				onChange={setPassword}
				type="password"
				placeholder="Password"
			/>
			<Input
				variant="primary"
				value={firstName}
				onChange={setFirstName}
				type="text"
				placeholder="First Name"
			/>
			<Input
				variant="primary"
				value={lastName}
				onChange={setLastName}
				type="text"
				placeholder="Last Name"
			/>
			<Button loading={loading} variant="primary" type="submit" onClick={() => { }}>Sign Up</Button>
		</Form>
	);
};
