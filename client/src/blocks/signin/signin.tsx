import React, { FC, useState, useEffect } from 'react';
import { Form } from '../form';
import { Button } from '../button';
import { Input } from '../input';
import { useMutation } from '@apollo/client';
import { SIGN_IN_MUTATION } from './_modifications';
import { useNavigate } from 'react-router-dom';

export const SignIn: FC = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();

	const [signIn, { data, loading, error: mutationError }] = useMutation(SIGN_IN_MUTATION);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		signIn({
			variables: {
				username,
				password,
			},
		});
	};

	useEffect(() => {
		if (data && data.signIn.accessToken) {
			// Store the tokens and navigate to the home page or dashboard
			localStorage.setItem('accessToken', data.signIn.accessToken);
			localStorage.setItem('refreshToken', data.signIn.refreshToken);
			navigate('/');
		} else if (mutationError) {
			setError(mutationError.message);
		}
	}, [data, navigate, mutationError]);

	return (
		<Form onSubmit={handleSubmit}>
			{error && <p>{error}</p>}
			<Input
				variant="primary"
				value={username}
				onChange={setUsername}
				type="username"
				placeholder="username"
			/>
			<Input
				variant="primary"
				value={password}
				onChange={setPassword}
				type="password"
				placeholder="Password"
			/>
			<Button loading={loading} variant="primary" type="submit" onClick={() => { }}>Sign In</Button>
		</Form>
	);
};
