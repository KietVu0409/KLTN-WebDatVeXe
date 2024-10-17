import { priceHeaderService } from "../services/PriceHeaderService";
import {SET_POINT_DROPOFF, SET_POINT_PICKUP, SET_POINT, SET_POINT_DETAIL, SET_POINTPICK_DETAIL, SET_POINTDROP_DETAIL} from "../types/PointTypes";
import { SET_ONE_PRICE_HEADER, SET_PRICE_HEADER } from "../types/PriceHeaderTypes";
import {message} from "antd";

export const getPriceHeaders = () => {
	return async (dispatch) => {
		try {
			const result = await priceHeaderService.getAllPriceHeader();
			if (result.status == 200) {
				dispatch({
					type: SET_PRICE_HEADER,
					listPriceHeader: result.data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const createPriceHeader = (station) => {
	return async (dispatch) => {
		try {
			const result = await priceHeaderService.createPriceHeader(station);
			if (result.status == 200) {
				message.success("Thêm thành công");
				dispatch(getPriceHeaders());
			}
		} catch (error) {
			message.error("Thêm thất bại");
			console.log(error);
		}
	};
};

export const getPriceHeader = (id) => {
	return async (dispatch) => {
		try {
			const result = await priceHeaderService.getPriceHeader(id);
			if (result.status == 200) {
				dispatch({
					type: SET_ONE_PRICE_HEADER,
					priceHeader: result.data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const updatePriceHeader = (id, dataParams) => {
	return async (dispatch) => {
		try {
			const result = await priceHeaderService.updatePriceHeader(id, dataParams);
			if (result.status == 200) {
				message.success("Cập nhật thành công");
			}
		} catch (error) {
			message.error("Cập nhật thất bại");
			console.log(error);
		}
	};
};
