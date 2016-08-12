// we import that function that will help use menaging each sub part of the state
// in his own reducer
import { combineReducers } from 'redux';
// we then add router reducer from react-router-redux
import { routerReducer } from 'react-router-redux';

// then we import all our reducers
import failingReducer from './failing/redux';
import identityReducer from './identity/redux';
import loadingReducer from './loading/redux';
import questionsReducer from './questions/redux';
import questionsAnswerReducer from './questionsAnswer/redux';
import questionsTimerReducer from './questionsTimer/redux';
import stepReducer from './step/redux';

// we combine them into one
const rootReducer = combineReducers({
	failing: failingReducer,
	identity: identityReducer,
	loading: loadingReducer,
	questions: questionsReducer,
	questionsAnswer: questionsAnswerReducer,
	questionsTimer: questionsTimerReducer,
	routing: routerReducer,
	step: stepReducer
});

export default rootReducer;
