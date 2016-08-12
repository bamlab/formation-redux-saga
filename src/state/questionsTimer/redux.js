// Actions
export const MODIFY 		= 'formation-redux/questionTimer/MODIFY';
export const FLUSH_ALL	= 'formation-redux/questionTimer/FLUSH_ALL';

// Reducer
export default function reducer(state = 0, action = {}) {
  switch (action.type) {
    case MODIFY:
			const newQuestionTimer = action.payload;
			const newQuestionsTimer  = { ...state };
			newQuestionsTimer[action.meta.questionID] = newQuestionTimer;
			return newQuestionsTimer;
		case FLUSH_ALL:
			return {};
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
