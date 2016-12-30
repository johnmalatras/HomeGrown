import { ADD_TO_CART, REMOVE_FROM_CART, PLACE_ORDER } from '../actions';

const initialState = {
	cart: [],
	cart2: [],
	cart3: []
};

export default function cartReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_CART:
			if(action.cartIndex == 1)
			{
				return Object.assign({}, state, {
					cart: action.cart
				});
			}else if(action.cartIndex == 2)
			{
				return Object.assign({}, state, {
					cart2: action.cart
				});
			}else if(action.cartIndex == 3)
			{
				return Object.assign({}, state, {
					cart3: action.cart
				});
			}

		case REMOVE_FROM_CART:
			if(action.cartIndex == 1)
			{
				return Object.assign({}, state, {
					cart: action.payload
				});
			}else if(action.cartIndex == 2)
			{
				return Object.assign({}, state, {
					cart2: action.payload
				});
			}else if(action.cartIndex == 3)
			{
				return Object.assign({}, state, {
					cart3: action.payload
				});
			}
		case PLACE_ORDER:
			if(action.cartIndex == 1)
			{
				return Object.assign({}, state, {
					cart: action.payload
				});
			}else if(action.cartIndex == 2)
			{
				return Object.assign({}, state, {
					cart2: action.payload
				});
			}else if(action.cartIndex == 3)
			{
				return Object.assign({}, state, {
					cart3: action.payload
				});
			}
		default:
			return state;
	}
}