// We import react and react dom as usal
import React from 'react';
import ReactDOM from 'react-dom';

// We import a bunch of libraries
// actually none are mandatory to use redux saga (not redux itself)
// but they are common in react/redux ecosystem so let use them
// #realworldexample
// - react-redux allow easier synchronisation between redux state and react ui comnent
import { Provider } from 'react-redux'
// - react router handle the page changes
import { Router, Route, browserHistory } from 'react-router'
// - to make possible to dispatch redux action to switch route
import { syncHistoryWithStore} from 'react-router-redux'

// we import the creation stor function
import createStore from './state/createStore';
const store = createStore(undefined, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

// Import a short css for better typography
// still basic
import './milligram.css';
import './style.css';

// import pages
import App from './App';
import FirstQuestionPage from './pages/1-first_question';
import SecondQuestionPage from './pages/2-second_question';
import ScorePage from './pages/score';
import NotFoundPage from './pages/not-found'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="1" component={FirstQuestionPage}/>
				<Route path="2" component={SecondQuestionPage}/>
				<Route path="score" component={ScorePage}/>
				<Route path="*" component={NotFoundPage}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
