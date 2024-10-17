import { SET_ONE_PRICE_HEADER, SET_PRICE_HEADER } from "../types/PriceHeaderTypes";
import { SET_PRICE } from "../types/priceTypes";

const initialState = {
	priceLines: [],
	priceLine: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_PRICE: {
			return {...state, priceLines: action.priceLines};
		}
		// case SET_ONE_PRICE_HEADER: {
		// 	return {...state, priceHeader: action.priceHeader};
		// }
		default:
			return state;
	}
};
