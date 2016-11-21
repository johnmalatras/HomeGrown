import { REQUEST_CURRENT_LISTINGS } from '../actions';

const initialState = {
	items: []
};

export default function itemReducer(state = initialState, action) {
	switch (action.type) {
		case REQUEST_CURRENT_LISTINGS:
			return Object.assign({}, state, {
				items: action.payload
			});
		default:
			return state;
	}
}