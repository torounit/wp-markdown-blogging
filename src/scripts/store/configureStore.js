import { createStore } from 'redux'
import rootReducer from '../reducers'
import { loadState, saveState } from '../api/localStorage'


const configureStore = ( reducer, enhancer ) => {

	const persistedState = loadState()
	const store = createStore(rootReducer, persistedState, enhancer)


	// store.subscribe( throttle(() => {
	// 	saveState({
	// 		auth: store.getState().auth
	// 	})
	// }, 1000))

	return store
}

export default configureStore
