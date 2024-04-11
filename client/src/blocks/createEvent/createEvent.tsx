import { FC, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form } from '../form';
import { Button } from '../button';
import { Input } from '../input';
import { CREATE_EVENT_MUTATION } from './_modifications';
import { useNavigate } from 'react-router-dom';
import { dataTestIdCreateEventButtonSubmit, dataTestIdCreateEventInputDate, dataTestIdCreateEventInputDescription, dataTestIdCreateEventInputName, dataTestIdCreateEventRoot } from './tests/ids';

export const CreateEvent: FC = () => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [date, setDate] = useState('');
	const navigate = useNavigate();

	const [createEvent] = useMutation(CREATE_EVENT_MUTATION);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		await createEvent({
			variables: {
				eventName: name,
				description: description,
				date: date,
			},
		});
		navigate("/");
	};

	return (
		<Form testId={dataTestIdCreateEventRoot} onSubmit={handleSubmit}>
			<Input
				testId={dataTestIdCreateEventInputName}
				variant="primary"
				value={name}
				onChange={setName}
				type="text"
				placeholder="Event Name"
			/>
			<Input
				testId={dataTestIdCreateEventInputDescription}
				variant="primary"
				value={description}
				onChange={setDescription}
				type="text"
				placeholder="Description"
			/>
			<Input
				testId={dataTestIdCreateEventInputDate}
				variant="primary"
				value={date}
				onChange={setDate}
				type="date"
			/>
			<Button testId={dataTestIdCreateEventButtonSubmit} variant="primary" type="submit" onClick={() => { }}>Create Event</Button>
		</Form>
	);
};
