// Actions
export const SET  = 'formation-redux/failing/SET';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function setFailing(payload) {
  return { type: SET, payload };
}
