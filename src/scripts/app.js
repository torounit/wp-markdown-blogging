import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import thunk        from 'redux-thunk'
import {login, post, posts} from './middlewares'
import configureStore from './store/configureStore'
import {doLogin} from "./actions/login";

// For Redux Init
const logger = createLogger();
const store = configureStore(reducers, applyMiddleware(thunk, posts, login, post, logger));
const container = document.querySelector('#app');

const auth = store.getState().auth;

if( auth.loggedIn ) {
	store.dispatch( doLogin( auth.username, auth.password ) );
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	container
);





