import { $api } from ".";

export const Api = {
  async fetchEvents() {
    const { data } = await $api.get('/events');
    return data;
  },
  async addEvent(event) {
    const response = await $api.post('/events', event);
    return response;
  },
  async getOneEvent(param) {
    const { data } = await $api.get(`/events?title=${param}`)
    return data[0];
  }
}