import { state } from './state/state.js';

export function insertOrUpdate(key, value) {
  state[key] = value;
}

export function find(key) {
  return state[key];
}
