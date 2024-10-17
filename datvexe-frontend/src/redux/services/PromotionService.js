import {baseService} from "./BaseService";

export class PromotionHeader extends baseService {
	constructor() {
		super();
	}
	getAllPromotionHeader = () => {
		return this.get(`/promotion/header`);
	};
	getPromotionHeader = (id) => {
		return this.get(`/promotion/header/${id}`);
	};
	updatePromotionHeader = (id, data) => {
		return this.put(`/promotion/header/${id}`, data);
	};
	createPromotionHeader = (point) => {
		return this.post(`/promotion/header`, point);
	};
	// deletePoint = (id) => {
	// 	return this.delete(`/point/${id}`);
	// };
}

export const promotionHeader = new PromotionHeader();
