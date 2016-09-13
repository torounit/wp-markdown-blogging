import React from 'react'
import { connect } from 'react-redux'
import { editTitle } from '../actions/editor'


class TitleForm extends React.Component {

	componentWillReceiveProps(nextProps) {
		// if (this.props.title !== nextProps.title) {
		// 	nextProps.load();
		// }
	}

	render() {
		let { title, onChangeTitle } = this.props;
		return (
			<div>
				<input
					label=""
					type="input"
					name="title"
					value={title}
					onChange={onChangeTitle}
					style={{
						fontSize: '2em',
						width: '100%',
						padding: '0 16px',
						outline: 'none'
					}}
				/>
			</div>
		);
	}



}


const mapStateToProps = (state) => {
	return {
		title: state.editor.title,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeTitle:(event) => {
			dispatch( editTitle(event.target.value) )
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TitleForm)
