// Actions
export const SET  = 'formation-redux/loading/SET';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function setLoading(payload) {
  return { type: SET, payload };
}
