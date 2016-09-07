import { RECEIVE_POSTS } from '../actions/posts';

const connection = (state = {}, action ) => {

	switch (action.type) {

		case RECEIVE_POSTS :
			let { receivedAt } = action;
			return Object.assign({}, state, {
				lastUpdated: receivedAt,
			})

		default:
			return state
	}
}

export default connection;
