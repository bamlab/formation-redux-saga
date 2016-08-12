// Actions
export const MODIFY 		= 'formation-redux/questionAnswers/MODIFY';
export const FLUSH_ALL	= 'formation-redux/questionAnswers/FLUSH_ALL';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case MODIFY:
			const newQuestionAnswer = { ...state[action.meta.questionID], ...action.payload };
			const newQuestionsAnswer  = { ...state };
			newQuestionsAnswer[action.meta.questionID] = newQuestionAnswer;
			return newQuestionsAnswer;
		case FLUSH_ALL:
			return {};
    default: return state;
  }
}

// Action Creators
export function modifyQuestionAnswers(questionID, payload) {
  return { type: MODIFY, payload , meta: { questionID }};
}

export function flushAllQuestionAnswers() {
  return { type: FLUSH_ALL };
}
