import React from 'react'
import { Panel, ButtonCircle } from 'rebass'
const HamburgerButton = ({ onClick }) => (

	<ButtonCircle size={48} type="button" onClick={onClick}>
		<i className="fa fa-bars" aria-hidden="true"></i>
	</ButtonCircle>

);

export default HamburgerButton;