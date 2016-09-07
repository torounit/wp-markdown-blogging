import React from 'react'
import { connect } from 'react-redux'
import { doLogin, doLogout } from '../actions/login'

const LoginForm = ({ loggedIn , onSubmitLogin, onSubmitLogout } ) => {
	let username, password;
	if ( loggedIn ) {
		return (
			<div>
				<form onSubmit={e => {
					e.preventDefault()
					onSubmitLogout()
				}}>
					<button type="submit">
						Logout
					</button>
				</form>
			</div>
		);
	}
	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault()
				onSubmitLogin(username.value,password.value)
			}}>
				<input id="username" ref={ node => { username = node }} />
				<input id="password" ref={ node => { password = node }} />
				<button type="submit">
					Login
				</button>
			</form>
		</div>
	);
}


const mapStateToProps = (state) => {
	return {
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

