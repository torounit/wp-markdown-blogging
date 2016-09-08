import React from 'react'
import PostForm from '../containers/PostForm'
import PostPreview from '../containers/PostPreview'
import LoginForm from '../containers/LoginForm'
import SavePostButton from '../containers/SavePostButton'

const App = () => (
	<div>
		<LoginForm />
		<PostForm />
		<PostPreview />
		<SavePostButton />
	</div>

);



export default App