import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignIn } from '../signin';
import { SignUp } from '../signup';
import { FC } from 'react';
import { Home } from '../home';
import { CreateEvent } from '../createEvent';
import { EventsList } from '../eventsList';
import { UpdateEvent } from '../updateEvent';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' index Component={Home} />
        <Route path="/signin" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/events" Component={EventsList} />
        <Route path="/events/create" Component={CreateEvent} />
        <Route path="/events/:eventId/edit" Component={UpdateEvent} />
      </Routes>
    </Router>
  );
};

export { App };
