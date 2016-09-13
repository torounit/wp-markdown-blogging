import React from 'react'
import { connect } from 'react-redux'
import { Panel, ButtonCircle } from 'rebass'
import {toggleMenu} from "../actions/menu";


const MenuButton = ({ onClick }) => (

	<ButtonCircle size={48} type="button" onClick={onClick}>
		<i className="fa fa-bars" aria-hidden="true"></i>
	</ButtonCircle>

);

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
)(MenuButton)
