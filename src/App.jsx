import { Calendar } from './components/Calendar/Calendar';
import { AddEvent } from './components/AddEvent/AddEvent';

import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <Calendar />
      <AddEvent />
    </div>
  );
};
