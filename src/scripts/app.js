import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import thunk        from 'redux-thunk'
import {login, post, posts} from './middlewares'

// For Redux Init
const logger = createLogger();
const store = createStore(reducers, applyMiddleware(thunk, posts, login, post, logger));
const container = document.querySelector('#app');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	container
);



