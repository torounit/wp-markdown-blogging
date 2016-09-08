"use strict";
import { combineReducers } from 'redux'
import posts from './posts'
import connection from './connection'
import editor from './editor'
import auth from  './auth'
import menu from './menu'

const reducers = combineReducers({
	connection,
	editor,
	posts,
	auth,
	menu
});

export default reducers;