import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';
import './styles/bundle.scss';

import App from './containers/App';
import Posts from './containers/Posts';
import User from './containers/User';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Posts} />
                <Route path="user/:userId" component={User} />
            </Route>
        </Router>
    </Provider>
  , document.getElementById('react-root'));
