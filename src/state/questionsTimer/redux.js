// Actions
export const MODIFY 		= 'formation-redux/questionTimer/MODIFY';
export const FLUSH_ALL	= 'formation-redux/questionTimer/FLUSH_ALL';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function modifyQuestionTimer(payload) {
  return { type: MODIFY, payload };
}

export function flushAllQuestionTimer(payload) {
  return { type: FLUSH_ALL, payload };
}
