import React from 'react'
import { connect } from 'react-redux'
import { doLogin, doLogout } from '../actions/login'
import { Button, Input } from 'rebass'

const LoginForm = ({ loggedIn , onSubmitLogin, onSubmitLogout, error } ) => {
	let username, password;
	if ( loggedIn ) {
		return (
			<div>
				<form onSubmit={e => {
					e.preventDefault()
					onSubmitLogout()
				}}>
					<Button type="submit">Logout</Button>
				</form>
			</div>
		);
	}
	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault()
				onSubmitLogin(username.value, password.value)
			}}>
				<Input label="Username" id="username" name="username" baseRef={ node => { username = node }} />
				<Input label="Password" id="password" name="password" baseRef={ node => { password = node }} />
				<Button type="submit">Login</Button>
				<p>{ error ? 'Login Failed' : ''}</p>
			</form>
		</div>
	);
}


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

