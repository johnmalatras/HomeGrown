import { REQUEST_ITEMS, REQUEST_ITEM_IMAGES,SET_IMAGES,IMAGE_LOADED,SET_DATE,UPDATE_DATE,UPDATE_ITEMS} from '../actions';
import moment from 'moment';

var date = moment().add(2, "days");
const initialState = {
	items: [],
	itemImages: [],
	selectedDate: date.local().format('dddd'),
	selectedDateMoment: date,
	selectedCart: 2,
	currentDate: moment().add(2, "days")
};


export default function itemReducer(state = initialState, action) {
	switch (action.type) {
		case REQUEST_ITEMS:
			console.log(action.payload);
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

			};
		case UPDATE_DATE:
			return Object.assign({}, state, {
				currentDate: moment().add(1, "days")
			});
		case SET_DATE:
			return Object.assign({}, state, {
				selectedDate: action.date,
				selectedDateMoment: action.dateMoment,
				selectedCart: action.cartIndex
			});
		case UPDATE_ITEMS:
			return{

			};
		default:
			return state;
	}
}
