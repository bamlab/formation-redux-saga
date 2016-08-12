// Actions
export const SET		= 'formation-redux/step/SET';
export const UPDATE = 'formation-redux/step/UPDATE';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function setStep(payload) {
  return { type: SET, payload };
}

export function updateStep(payload) {
  return { type: UPDATE, payload };
}
