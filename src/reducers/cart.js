import { ADD_TO_CART, REMOVE_FROM_CART, PLACE_ORDER } from '../actions';

const initialState = {
	cart: []
};

export default function cartReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_CART:
			return Object.assign({}, state, {
				cart: action.payload
			});
		case REMOVE_FROM_CART:
			return Object.assign({}, state, {
				cart: action.payload
			});
		case PLACE_ORDER:
			return Object.assign({}, state, {
				cart: action.payload
			});
		default:
			return state;
	}
}