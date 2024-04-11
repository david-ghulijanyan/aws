import React, { useState, useEffect, FC } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Form } from '../form';
import { Button } from '../button';
import { Input } from '../input';
import { useLocation, useNavigate } from 'react-router-dom';
import { GET_EVENT_QUERY, UPDATE_EVENT_MUTATION } from './_modifications';

export const UpdateEvent: FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { data: eventData, loading: eventLoading } = useQuery(GET_EVENT_QUERY, {
		variables: { eventId: location?.pathname?.split('/')[2] },
	});
	const [updateEvent] = useMutation(UPDATE_EVENT_MUTATION);

	const [event, setEvent] = useState({
		eventId: '',
		eventName: '',
		description: '',
		date: '',
	});

	useEffect(() => {
		if (eventData && eventData.getEvent) {
			setEvent(eventData.getEvent);
		}
	}, [eventData]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await updateEvent({
			variables: {
				eventId: event.eventId,
				eventName: event.eventName,
				description: event.description,
				date: event.date,
			},
		});
		navigate("/");
	};

	if (eventLoading) return <div>Loading...</div>;

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				variant="primary"
				value={event.eventName}
				onChange={(eventName) => setEvent({ ...event, eventName })}
				type="text"
				placeholder="Event Name"
			/>
			<Input
				variant="primary"
				value={event.description}
				onChange={(description) => setEvent({ ...event, description })}
				type="text"
				placeholder="Description"
			/>
			<Input
				variant="primary"
				value={event.date}
				onChange={(date) => setEvent({ ...event, date })}
				type="date"
			/>
			<Button variant="primary" type="submit" onClick={() => { }}>Update Event</Button>
		</Form>
	);
};
