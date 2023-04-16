import { $api } from ".";

function getValues(events) {
  // get only the desired object values
  return events.map(event => ({
    id: event.id,
    start: event.start,
    end: event.end,
    title: event.title
  }
  ))
}

export const Api = {
  async fetchEvents() {
    const { data } = await $api.get('/events');
    return getValues(data);
  },
  async addEvent(event) {
    const response = await $api.post('/events', event);
    return response;
  },
  async removeEvent(eventId) {
    const response = await $api.delete(`/events/${eventId}`);
    return response;
  },
  async getOneEvent(eventId) {
    const { data } = await $api.get(`/events?id=${eventId}`)
    return data[0];
  }
}