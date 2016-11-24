import { connect } from 'react-redux'
import { selectPost } from '../actions/post';
import PostsList from '../components/PostsList'

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onPostClick: (id) => {
			dispatch(selectPost(id));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostsList)
