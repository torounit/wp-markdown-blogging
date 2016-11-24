import React from 'react'

class TitleInput extends React.Component {

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
					placeholder="Title"
					name="title"
					value={title}
					onChange={onChangeTitle}
					style={{
						fontSize: '2em',
						width: '100%',
						outline: 'none',
						boxSizing: 'border-box',
						border: 'none'
					}}
				/>
			</div>
		);
	}
}

export default TitleInput;