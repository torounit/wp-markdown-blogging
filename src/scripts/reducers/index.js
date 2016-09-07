"use strict";
import { combineReducers } from 'redux'
import posts from './posts'
import connection from './connection'
import editor from './editor'
import auth from  './auth'

const reducers = combineReducers({
	connection,
	editor,
	posts,
	auth
});

export default reducers;