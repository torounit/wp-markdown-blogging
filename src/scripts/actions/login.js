"use strict";
import WP from '../../../node_modules/wpapi/browser/wpapi';

export const LOGGED_IN = 'LOGGED_IN'
export const loginSuccess = ( username, password ) => {
	return {
		type: LOGGED_IN,
		loggedIn: true,
		username,
		password
	}
};

export const LOGIN_FAILED = 'LOGIN_FAILED'
export const loginFailed = () => {
	return {
		type: LOGIN_FAILED,
		loggedIn: false,
		username: '',
		password: ''
	}
}

export const doLogin = ( username, password ) => {

	return ( dispatch ) => {
		let wp = new WP({
			endpoint: 'http://vccw.loc/wp-json',
			username,
			password
		});

		return wp.users('me')
			.then( () => dispatch(loginSuccess( username, password )))
			.catch(() => dispatch(loginFailed()))
	}
}

export const LOGGED_OUT = 'LOGGED_OUT'
export const doLogout = () => {
	return {
		type: LOGGED_OUT
	}
}