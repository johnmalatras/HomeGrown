import { REQUEST_ITEMS, REQUEST_ITEM_IMAGES,SET_IMAGES,IMAGE_LOADED} from '../actions';

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
		case SET_IMAGES:
			return Object.assign({}, state, {
				items: action.payload
			});
		case IMAGE_LOADED:
			return{

			}
		default:
			return state;
	}
}