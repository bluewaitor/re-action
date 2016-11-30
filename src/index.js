import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers'

import App from './App';
import About from './About';


let store = createStore(reducers);


render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="about" component={About}/>
            </Route>
        </Router>
    </Provider>, document.getElementById('root')
);