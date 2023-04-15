import React, { Fragment } from 'react';
import { useQuery } from 'react-query';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import timelinePlugin from '@fullcalendar/timeline';

import { EventItem } from './EventItem';
import { Api } from '../../api/event-api';

export const Calendar = () => {
  const { data: events = [], loading } = useQuery('get-events', Api.fetchEvents);

  const handleClick = (value) => {
    console.log('click', value.event.extendedProps.description);
  };

  return (
    <Fragment>
      {loading && <h2>Loading ...</h2>}
      {!loading && (
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, timelinePlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            start: 'today,timeGridWeek,timeGridDay,dayGridMonth',
            center: 'title',
            end: 'prev next',
          }}
          scrollTime={'00:00:00'}
          events={events}
          eventClick={handleClick}
          eventBackgroundColor="transparent"
          eventBorderColor="red"
          eventContent={EventItem}
          selectable
        />
      )}
    </Fragment>
  );
};
