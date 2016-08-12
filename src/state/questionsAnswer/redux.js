// Actions
export const MODIFY 		= 'formation-redux/questionAnswers/MODIFY';
export const FLUSH_ALL	= 'formation-redux/questionAnswers/FLUSH_ALL';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function modifyQuestionAnswers(payload) {
  return { type: MODIFY, payload };
}

export function flushAllQuestionAnswers(payload) {
  return { type: FLUSH_ALL, payload };
}
