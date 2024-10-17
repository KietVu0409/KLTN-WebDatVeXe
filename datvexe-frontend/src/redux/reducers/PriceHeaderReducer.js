import { SET_ONE_PRICE_HEADER, SET_PRICE_HEADER } from "../types/PriceHeaderTypes";

const initialState = {
	listPriceHeader: [],
	priceHeader: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_PRICE_HEADER: {
			return {...state, listPriceHeader: action.listPriceHeader};
		}
		case SET_ONE_PRICE_HEADER: {
			return {...state, priceHeader: action.priceHeader};
		}
		default:
			return state;
	}
};
