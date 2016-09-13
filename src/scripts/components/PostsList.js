import React  from 'react'
const PropTypes = React.PropTypes;

const Posts = ({ posts, onPostClick }) => (
	<div>
		<ol>
			{ posts.map( (post) =>
				<li
					key={post.id}
					onClick={ () => onPostClick(post.id) }
				>
					<div className="center">{post.title.rendered}</div>
				</li>
			) }
		</ol>
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
