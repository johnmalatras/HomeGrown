import { REQUEST_ITEMS, REQUEST_ITEM_IMAGES,SET_IMAGES,IMAGE_LOADED,SET_DATE} from '../actions';
import moment from 'moment';

var date = moment().add(1, "days");
const initialState = {
	items: [],
	itemImages: [],
	selectedDate: date.local().format('ddd'),
	selectedDateMoment: date
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
		case SET_DATE:
			return Object.assign({}, state, {
				selectedDate: action.date,
				selectedDateMoment: action.dateMoment
			});
		default:
			return state;
	}
}