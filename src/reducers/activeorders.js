import { REQUEST_ACTIVE_ORDERS } from '../actions';

const initialState = {
	items: []
};

export default function activeOrderReducer(state = initialState, action) {
	switch (action.type) {
		case REQUEST_ACTIVE_ORDERS:
			return Object.assign({}, state, {
				items: action.payload
			});
		default:
			return state;
	}
}