const storage = window.localStorage;
const field = 'state';

export default {
  get load() {
    const state = storage.getItem(field);
    return JSON.parse(state);
  },

  save(state) {
    const json = JSON.stringify(state);
    return storage.setItem(field, json);
  },
};
