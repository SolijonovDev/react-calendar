import { Calendar } from './components/Calendar/Calendar';
import { AddEvent } from './components/AddEvent/AddEvent';
import { EventDetails } from './components/EventDetails/EventDetails';

import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <Calendar />
      <AddEvent />
      <EventDetails />
    </div>
  );
};
