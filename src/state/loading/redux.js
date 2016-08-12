// Actions
export const SET  = 'formation-redux/loading/SET';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SET:
			return action.payload;
    default: return state;
  }
}

// Action Creators
export function setLoading(payload) {
  return { type: SET, payload };
}
