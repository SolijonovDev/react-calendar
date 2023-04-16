import { createContext, useContext, useState } from 'react';

const EventContext = createContext(null);

export const EventProvider = ({ children }) => {
  const [eventId, setEventId] = useState(null);
  return <EventContext.Provider value={{ eventId, setEventId }}>{children}</EventContext.Provider>;
};

export const useEventContext = () => useContext(EventContext);
