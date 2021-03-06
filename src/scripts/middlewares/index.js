"use strict";
import {endpoint} from '../constants/wp'
import WPAPI from '../../../node_modules/wpapi/browser/wpapi';
import {LOGGED_IN} from '../actions/login'
import {ADD_POST, EDIT_POST, SELECT_POST} from '../actions/post'
import {REQUEST_POSTS} from "../actions/posts";
import {RECEIVE_POSTS} from "../actions/posts";
import {fetchPosts} from "../actions/posts";
import {DO_LOGGIN} from "../actions/login";
import {saveState} from "../api/localStorage";
import {LOGGED_OUT} from "../actions/login";

export const login = store => next => action => {

	if (action.type == LOGGED_OUT) {

		saveState({
			auth: {}
		})
		next(action);

	}


	if (action.type != DO_LOGGIN) {
			return next(action);
	}

	if (action.type == DO_LOGGIN) {

		let {username, password} = action;
		let wpapi = new WPAPI({
			endpoint: endpoint,
			username,
			password,
			auth: true
		});

		wpapi.users().me().then(() => {

			let result = next(Object.assign({}, action, { type: LOGGED_IN,loggedIn: true, error: false}));
			store.dispatch(fetchPosts())

			saveState({
				auth: store.getState().auth
			})

			return result;

		}).catch((err) => {
			if (err.message !== "Unauthorized" && err.crossDomain ) {
				let result = next(Object.assign({}, action, { type: LOGGED_IN,loggedIn: true, error: false}));
				store.dispatch(fetchPosts())
				return result;
			}
			return next(Object.assign({}, action, { type: LOGGED_IN,loggedIn: false, error: true }))
		})

	}

}

export const posts = store => next => action => {
	let state = store.getState();
	let {username, password} = state.auth;
	let wpapi = new WPAPI({
		endpoint: endpoint,
		username,
		password,
		auth: true
	});

	if(action.type == REQUEST_POSTS) {
		return wpapi.posts().edit().then((posts) => {
			return next({
				type: RECEIVE_POSTS,
				posts,
				filter:action.filter,
				receivedAt: Date.now()
			})
		})
	}
	return next(action);
}

export const post = store => next => action => {
	let state = store.getState();
	let {username, password} = state.auth;
	let wpapi = new WPAPI({
		endpoint: endpoint,
		username,
		password,
		auth: true
	});

	if (action.type == ADD_POST) {
		let {title, content} = action;
		return wpapi.posts().create({
			title,
			content,
			status: 'publish'
		}).then((data) => next({
			type: ADD_POST,
			data
		})).catch((data) => console.log(data));
	}
	else if (action.type == EDIT_POST) {
		let {content, title, id} = action;
		return wpapi.posts().id(id).update({
			title,
			content,
			status: 'publish'
		}).then((data) => next({
			type: EDIT_POST,
			data,
			id
		}))
	}else if( action.type == SELECT_POST ) {
		let { id } = action;

		return wpapi.posts().id(id).edit().then((data) => next({
			type: SELECT_POST,
			id: id,
			title: data.title.raw,
			content: data.content.raw
		}))
	}

	return next(action)
}