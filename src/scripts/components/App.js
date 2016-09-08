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
			<Flex
				align="stretch"
				style={{
					flex: '1 1 auto'
				}}>
				<div style={{
					width: '50%',
					background: '#f5f5f5',
					padding: '16px'
				}}>
					<PostForm />
				</div>
				<div style={{
					width: '50%',
					background: '#fff',
					padding: '16px'
				}}>
					<PostPreview />
				</div>
			</Flex>
			<div style={{
				padding: '16px'
			}}>
				<SavePostButton />
			</div>
		</Flex>

	</div>

);



export default App