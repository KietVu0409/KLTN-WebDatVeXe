import { priceService } from "../services/priceService";
import { SET_PRICE } from "../types/priceTypes";
import {message} from "antd";

export const getPriceLineByHeaderId = (id) => {
	return async (dispatch) => {
		try {
			const result = await priceService.getPriceLineByHeaderId(id);
			if (result.status == 200) {
				dispatch({
					type: SET_PRICE,
					priceLines: result.data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const createPriceLine = (station, id) => {
	return async (dispatch) => {
		try {
			const result = await priceService.createPriceLine(station);
			if (result.status == 200) {
				message.success("Thêm thành công");
				dispatch(getPriceLineByHeaderId(id));
			}
		} catch (error) {
			message.error("Thêm thất bại");
			console.log(error);
		}
	};
};

// export const getPriceHeader = (id) => {
// 	return async (dispatch) => {
// 		try {
// 			const result = await priceHeaderService.getPriceHeader(id);
// 			if (result.status == 200) {
// 				dispatch({
// 					type: SET_ONE_PRICE_HEADER,
// 					priceHeader: result.data,
// 				});
// 			}
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// };

// export const updatePriceHeader = (id, dataParams) => {
// 	return async (dispatch) => {
// 		try {
// 			const result = await priceHeaderService.updatePriceHeader(id, dataParams);
// 			if (result.status == 200) {
// 				message.success("Cập nhật thành công");
// 			}
// 		} catch (error) {
// 			message.error("Cập nhật thất bại");
// 			console.log(error);
// 		}
// 	};
// };
