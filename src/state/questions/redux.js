// Actions
export const MODIFY 		= 'formation-redux/question/MODIFY';
export const FLUSH_ALL	= 'formation-redux/question/FLUSH_ALL';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case MODIFY:
			const newQuestion = { ...state[action.meta.questionID], ...action.payload };
			const newQuestions  = { ...state };
			newQuestions[action.meta.questionID] = newQuestion;
			return newQuestions;
		case FLUSH_ALL:
			return {};
    default: return state;
  }
}

// Action Creators
export function modifyQuestion(payload) {
  return { type: MODIFY, payload };
}

export function flushAllQuestion(payload) {
  return { type: FLUSH_ALL, payload };
}
