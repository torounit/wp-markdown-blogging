import React from 'react'
import { Drawer ,Close,Overlay } from 'rebass'
import { connect } from 'react-redux'

export const LoginOverlay = ({children, loggedIn}) => (
	<Overlay open={loggedIn}>
		{children}
	</Overlay>
);

const mapStateToProps = (state) => {
	return {
		loggedIn: !state.auth.loggedIn
	}
}


export default connect(
	mapStateToProps
)(LoginOverlay)