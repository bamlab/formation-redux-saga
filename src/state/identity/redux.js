// Actions
export const SET		= 'formation-redux/identity/SET';
export const UPDATE = 'formation-redux/identity/UPDATE';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function setIdentity(payload) {
  return { type: SET, payload };
}

export function updateIdentity(payload) {
  return { type: UPDATE, payload };
}
