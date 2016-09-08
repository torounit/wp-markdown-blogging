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

		<Flex column align="stretch" style={{height:'100vh'}}>
			<TitleForm />
			<Flex align="stretch" style={{flex: '1 1 auto'}}>
				<div style={{flex: '1 1 auto'}}>
					<PostForm />
				</div>
				<div style={{flex: '1 1 auto'}}>
					<PostPreview />
				</div>
			</Flex>

			<SavePostButton />
		</Flex>

	</div>

);



export default App