import React  from 'react'
import { Divider } from 'rebass';
const PropTypes = React.PropTypes;

const Posts = ({ posts, onPostClick }) => (
	<div>
		<div>
			{ posts.map( (post) =>
				<div
					key={post.id}
					onClick={ () => onPostClick(post.id) }
					style={{
						padding: '8px',
						borderBottom: '1px solid #CCC'
					}}
				>
					<div className="center">{post.title.rendered}</div>
				</div>
			) }
		</div>
	</div>
)

Posts.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.object.isRequired
	}).isRequired).isRequired,
	onPostClick: PropTypes.func.isRequired
}

export default Posts
