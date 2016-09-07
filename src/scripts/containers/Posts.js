import { connect } from 'react-redux'
import { viewPost } from '../actions/post';
import PostsList from '../components/PostsList'


const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onPostClick: (id) => {
			dispatch(viewPost(id));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostsList)
