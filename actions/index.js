export const REQUEST_ITEMS = 'REQUEST_ITEMS';

export function requestItems(term = null) {
	const data = [
	  				{
	  					title: "Broccoli",
	  					seller: "John M",
	  					price: "15",
	  					quantity: "28",
	  					metric: "g"
	  				}
	  			];

	return {
		type: REQUEST_ITEMS,
		payload: data
	}
}