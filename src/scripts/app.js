import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import thunk        from 'redux-thunk'
import {login,post} from './middlewares'
import {fetchPosts} from './actions/posts';

//Needed for onTouchTap
//injectTapEventPlugin();


// For Redux Init
const logger = createLogger();
const store = createStore(reducers, applyMiddleware(thunk, login, post,logger));
const container = document.querySelector('#app');

store.dispatch(fetchPosts())
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	container
);



