// Actions
export const SET  = 'formation-redux/failing/SET';

// Reducer
export default function reducer(state = false, action = {}) {
  switch (action.type) {
    case SET:
			return action.payload;
    default:
			return state;
  }
}

// Action Creators
export function setFailing(payload) {
  return { type: SET, payload };
}
