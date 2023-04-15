import React, { useEffect } from 'react';

export const EventItem = ({ event }) => {
  return <div onClick={() => console.log('cajfclick')}>{event.title} two</div>;
};
