"use strict";
import WP from '../../../node_modules/wpapi/browser/wpapi';

export const DO_LOGGIN = 'DO_LOGGIN'
export const LOGGED_IN = 'LOGGED_IN'
export const doLogin = ( username, password ) => {

	return {
		type: DO_LOGGIN,
		username,
		password
	};
}

export const LOGGED_OUT = 'LOGGED_OUT'
export const doLogout = () => {
	return {
		type: LOGGED_OUT
	}
}