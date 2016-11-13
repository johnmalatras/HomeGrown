import { REQUEST_ITEMS } from '../actions';

const initialState = {
	items: []
};

export default function itemReducer(state = initialState, action) {
	switch (action.type) {
		case REQUEST_ITEMS:
			return Object.assign({}, state, {
				items: action.payload
			});
		default:
			return state;
	}
}