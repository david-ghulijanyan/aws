import { FC, useState } from 'react';
import { Button } from '../button';
import { IEvent } from './eventsList.interfaces';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_EVENTS_QUERY } from './_modifications';
import styles from "./eventsList.module.scss";

export const EventsList: FC = () => {
	const [filter, setFilter] = useState({ name: '', date: '' });
	const [submittedFilter, setSubmittedFilter] = useState<{ name: string; date: string; } | undefined>(undefined);
	const { data, loading, error, refetch } = useQuery(GET_EVENTS_QUERY, {
		variables: { limit: 20, filter: submittedFilter },
	});
	const navigate = useNavigate();

	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'name' | 'date') => {
		setFilter({ ...filter, [field]: e.target.value });
	};

	const handleFilterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmittedFilter(filter.name || filter.date ? filter : undefined);
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error loading events!</p>;

	return (
		<div>
			<div className={styles.header}>
				<h2>Events</h2>
				<Button variant="primary" onClick={() => {
					navigate('/events/create');
				}} >Create Event</Button>
			</div>
			<form className={styles.filter} onSubmit={handleFilterSubmit}>
				<input
					type="text"
					placeholder="Filter by name"
					value={filter.name}
					onChange={(e) => handleFilterChange(e, 'name')}
				/>
				<input
					type="date"
					placeholder="Filter by date"
					value={filter.date}
					onChange={(e) => handleFilterChange(e, 'date')}
				/>
				<Button variant="secondary" type="submit" onClick={() => { }}>Filter</Button>
			</form>
			{data?.getEvents?.items?.map((event: IEvent) => (
				<div key={event.eventId}>
					<h3>{event.eventName}</h3>
					<p>{event.description}</p>
					<small>{event.date}</small>
					<div>
						<Button variant="primary" onClick={() => {
							navigate(`/events/${event.eventId}/edit`);
						}}>Edit</Button>
					</div>
				</div>
			))}
		</div>
	);
};
