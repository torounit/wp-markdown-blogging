import React from 'react'
import { ButtonCircle } from 'rebass'
const SignOutButton = ({ onClick }) => (

	<ButtonCircle size={32} type="button" onClick={onClick}>
		<i className="fa fa-sign-out" aria-hidden="true"></i>
	</ButtonCircle>

);

export default SignOutButton;