import { SET_ONE_PROMOTION_HEADER, SET_PROMOTION_HEADER } from "../types/PromotionHeaderTypes";

const initialState = {
	promotionHeaders: [],
	promotionHeader: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_PROMOTION_HEADER: {
			return {...state, promotionHeaders: action.promotionHeaders};
		}
		case SET_ONE_PROMOTION_HEADER: {
			return {...state, promotionHeader: action.promotionHeader};
		}
		default:
			return state;
	}
};
