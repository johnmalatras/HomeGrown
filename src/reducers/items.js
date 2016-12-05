import { REQUEST_ITEMS, REQUEST_ITEM_IMAGES} from '../actions';

const initialState = {
	items: [],
	itemImages: []
};

export default function itemReducer(state = initialState, action) {
	switch (action.type) {
		case REQUEST_ITEMS:
			return Object.assign({}, state, {
				items: action.payload
			});
		case REQUEST_ITEM_IMAGES:
			return Object.assign({}, state, {
				itemImages: action.payload
			});
		default:
			return state;
	}
}