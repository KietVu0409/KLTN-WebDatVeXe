import {baseService} from "./BaseService";

export class PriceService extends baseService {
	constructor() {
		super();
	}
	getPriceLineByHeaderId = (id) => {
		return this.get(`/price/line/all/${id}`);
	};
	// getPriceHeader = (id) => {
	// 	return this.get(`/price/header/${id}`);
	// };
	// updatePriceHeader = (id, data) => {
	// 	return this.put(`/price/header/${id}`, data);
	// };
	createPriceLine = (point) => {
		return this.post(`/price/line`, point);
	};
	// deletePoint = (id) => {
	// 	return this.delete(`/point/${id}`);
	// };
}

export const priceService = new PriceService();
