import { promotionHeader } from "../services/PromotionService";
import { SET_ONE_PROMOTION_HEADER, SET_PROMOTION_HEADER } from "../types/PromotionHeaderTypes";
import {message} from "antd";

export const getPromotionHeaders = () => {
	return async (dispatch) => {
		try {
			const result = await promotionHeader.getAllPromotionHeader();
			if (result.status == 200) {
				dispatch({
					type: SET_PROMOTION_HEADER,
					promotionHeaders: result.data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const createPromotionHeader = (station) => {
	return async (dispatch) => {
		try {
			const result = await promotionHeader.createPromotionHeader(station);
			if (result.status == 200) {
				message.success("Thêm thành công");
				dispatch(getPromotionHeaders());
			}
		} catch (error) {
			message.error("Thêm thất bại");
			console.log(error);
		}
	};
};

export const getPromotionHeader = (id) => {
	return async (dispatch) => {
		try {
			const result = await promotionHeader.getPromotionHeader(id);
			if (result.status == 200) {
				dispatch({
					type: SET_ONE_PROMOTION_HEADER,
					promotionHeader: result.data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const updatePromtionHeader = (id, dataParams) => {
	return async (dispatch) => {
		try {
			const result = await promotionHeader.updatePromotionHeader(id, dataParams);
			if (result.status == 200) {
				message.success("Cập nhật thành công");
			}
		} catch (error) {
			message.error("Cập nhật thất bại");
			console.log(error);
		}
	};
};
