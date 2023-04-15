import { $api } from ".";

export const Api = {
  async fetchEvents() {
    const { data } = await $api.get('/events');
    return data;
  }
}