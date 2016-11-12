import { REQUEST_ITEMS } from '../actions';

const initialState = {
	data: []
};

export default function items(state = initialState, action) {
	switch (action.type) {
		case REQUEST_ITEMS:
			return Object.assign({}, state, {
				data: action.payload
			});
		default:
			return state;
	}
}