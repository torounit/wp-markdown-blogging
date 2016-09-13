import WP from '../../../node_modules/wpapi/browser/wpapi';
import {LOGGED_IN} from '../actions/login'
import {ADD_POST, EDIT_POST, SELECT_POST} from '../actions/post'
export const login = store => next => action => {

	if (action.type == LOGGED_IN) {
		let {username, password} = action;
		let wp = new WP({
			endpoint: 'http://vccw.loc/wp-json',
			username,
			password,
			auth: true
		});

		wp.users().me().then(() => {
			return next(Object.assign({}, action, {loggedIn: true, error: false}))
		}).catch((err) => {
			if (err.message !== "Unauthorized" && err.crossDomain ) {
				return next(Object.assign({}, action, {loggedIn: true, error: false}))
			}
			return next(Object.assign({}, action, {loggedIn: false, error: true}))
		})
	}

	return next(action);
}

export const post = store => next => action => {
	let state = store.getState();
	let {username, password} = state.auth;
	let wp = new WP({
		endpoint: 'http://vccw.loc/wp-json',
		username,
		password,
		auth: true
	});

	if (action.type == ADD_POST) {
		let {title, content} = action;
		return wp.posts().create({
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
		return wp.posts().id(id).update({
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
		console.log(id);

		return wp.posts().id(id).then((data) => next({
			type: SELECT_POST,
			id: id,
			title: data.title.rendered,
			content: data.content.rendered
		}))
	}

	return next(action)
}