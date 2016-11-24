import React from 'react'
import LoginOverlay from '../containers/LoginOverlay'
import PostForm from '../containers/PostForm'
import PostPreview from '../containers/PostPreview'
import LoginForm from '../containers/LoginForm'
import SavePostButton from '../containers/SavePostButton'
import TitleForm from '../containers/TitleForm'
import MenuButton from '../containers/MenuButton'
import SideMenu from '../containers/SideMenu'
import LogoutButton from '../containers/LogoutButton'

import {Panel} from 'rebass'
import {Flex, Box} from 'reflexbox'
import Icon from 'react-geomicons'

const App = () => (
	<div>
		<LoginOverlay open="true">
			<Panel theme="info">
				<LoginForm />
			</Panel>
		</LoginOverlay>
		<SideMenu />

		<Flex column align="stretch" style={{height: '100vh'}}>

			<Flex
				align="center"
				justify="space-between"
			>
				<Box
					auto
					px={1} py={2}
				>
					<TitleForm />
				</Box>
				<Box p={1}>
					<LogoutButton />
				</Box>
			</Flex>
			<Flex
				align="stretch"
				style={{
					flex: '1 1 auto',
					borderWidth: '1px 0',
					borderStyle: 'solid',
					borderColor: '#ccc'
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
			<Flex
				justify='flex-end'
				style={{
					padding: '16px'
				}}
			>
				<SavePostButton/>
			</Flex>
		</Flex>
		<div style={{
			position: 'fixed',
			bottom: '16px',
			left: '16px',
			zIndex: 100
		}}>
			<MenuButton />
		</div>

	</div>

);


export default App