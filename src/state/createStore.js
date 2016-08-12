// import redux librairies to create the store and apply middlewares
import { applyMiddleware, createStore as reduxCreateStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
// @TODO : import saga middleware

// import the root reducer
import rootReducer from './rootReducer';

// @TODO import the root saga

const createStore = (initialState = undefined, history) => {
	// a middleware is a function that take a dispach and the root state selector and return a function that
	// modify the default dispatch to the new dispatch
  const middlewares = [];

	middlewares.push(routerMiddleware(history));
	// @TODO : add saga middleware

	// A enhancers is a function that take a store creator and return a modified store creator
	const enhancers = [];

	// Enable Redux devtools for development
  // https://github.com/gaearon/redux-devtools#chrome-extension
	const devToolsExtension = window.devToolsExtension;
	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension());
	}

	const store = reduxCreateStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      ...enhancers
    )
  );

	// @TODO : make saga middleware run root saga

	// @TODO : make store closing cancel remaining saga

	return store;
};

export default createStore;
