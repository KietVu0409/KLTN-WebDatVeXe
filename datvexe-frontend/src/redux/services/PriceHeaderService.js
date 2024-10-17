import {baseService} from "./BaseService";

export class PriceHeaderService extends baseService {
	constructor() {
		super();
	}
	getAllPriceHeader = (id) => {
		return this.get(`/price/header`);
	};
	getPriceHeader = (id) => {
		return this.get(`/price/header/${id}`);
	};
	updatePriceHeader = (id, data) => {
		return this.put(`/price/header/${id}`, data);
	};
	createPriceHeader = (point) => {
		return this.post(`/price/header`, point);
	};
	// deletePoint = (id) => {
	// 	return this.delete(`/point/${id}`);
	// };
}

export const priceHeaderService = new PriceHeaderService();
