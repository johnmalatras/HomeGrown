import { ADD_TO_CART } from '../actions';

const initialState = {
	cart: []
};

export default function cartReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_CART:
			return Object.assign({}, state, {
				cart: action.payload
			});
		default:
			return state;
	}
}