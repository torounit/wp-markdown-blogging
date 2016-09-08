import React from 'react'
import LoginOverlay from '../containers/LoginOverlay'
import PostForm from '../containers/PostForm'
import PostPreview from '../containers/PostPreview'
import LoginForm from '../containers/LoginForm'
import SavePostButton from '../containers/SavePostButton'
import TitleForm from '../containers/TitleForm'
import { Panel } from 'rebass'
import { Flex, Box } from 'reflexbox'

const App = () => (
	<div>
		<LoginOverlay open="true">
			<Panel theme="info">
				<LoginForm />
			</Panel>
		</LoginOverlay>

		<TitleForm />
		<Flex align="stretch">
			<Box auto>
				<PostForm />
			</Box>
			<Box auto>
				<PostPreview />
			</Box>
		</Flex>

		<SavePostButton />
	</div>

);



export default App