import React from 'react'
import PostForm from '../containers/PostForm'
import PostPreview from '../containers/PostPreview'
import LoginForm from '../containers/LoginForm'

const App = () => (
	<div>
		<LoginForm />
		<PostForm />
		<PostPreview />
	</div>

);



export default App