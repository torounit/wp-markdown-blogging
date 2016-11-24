import React from 'react'
import { connect } from 'react-redux'
import {toggleMenu} from "../actions/menu";
import HamburgerButton from '../components/HamburgerButton';




const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: () => {
			dispatch(toggleMenu());
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HamburgerButton)
