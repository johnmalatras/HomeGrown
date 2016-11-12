export const REQUEST_ITEMS = 'REQUEST_ITEMS';

const data = {
	title: "Broccoli",
	seller: "John M",
	price: "15",
	quantity: "28",
	metric: "gram"
};

export function requestItems() {
	return {
		type: REQUEST_ITEMS,
		payload: data
	}
}