import React from 'react'
import {connect} from 'react-redux'
import {Drawer} from 'rebass'
import {closeMenu} from "../actions/menu";
import Posts from './Posts'


const SideMenu = ({isOpen, onDismiss}) => (

	<Drawer open={isOpen} onDismiss={onDismiss} size={240}>
		<Posts></Posts>
	</Drawer>

);

const mapStateToProps = (state) => {
	return {
		isOpen: state.menu.isOpen
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onDismiss: () => {
			dispatch(closeMenu());
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SideMenu)
