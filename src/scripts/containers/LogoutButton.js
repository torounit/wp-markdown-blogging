import React from 'react'
import { connect } from 'react-redux'
import SignOutButton from '../components/SignOutButton';
import {doLogout} from "../actions/login";




const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: () => {
			dispatch(doLogout());
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignOutButton)
