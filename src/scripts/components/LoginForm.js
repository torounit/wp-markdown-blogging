import React from 'react'
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

export default LoginForm