// Actions
export const SET		= 'formation-redux/step/SET';
export const UPDATE = 'formation-redux/step/UPDATE';

// Reducer
export default function reducer(state = 0, action = {}) {
  switch (action.type) {
    case SET:
			return action.payload;
    default: return state;
  }
}

// Action Creators
export function setStep(payload) {
  return { type: SET, payload };
}
