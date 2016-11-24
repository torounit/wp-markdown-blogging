import React from 'react'
import { connect } from 'react-redux'
import { doLogin, doLogout } from '../actions/login'
import LoginForm from '../components/LoginForm'

const mapStateToProps = (state) => {
	return {
		error: state.auth.error,
		loggedIn: state.auth.loggedIn
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		onSubmitLogin: ( username, password ) => {
			dispatch( doLogin(username, password) );
		},
		onSubmitLogout:() => {
			dispatch( doLogout() );
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginForm)

