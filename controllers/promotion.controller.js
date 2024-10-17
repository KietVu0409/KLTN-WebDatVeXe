const {PromotionHeader, PromotionLine, PromotionDetail, Trip} = require("../models");
const {Op, where} = require("sequelize");
// header
const createPromotionHeader = async (req, res) => {
	const data = req.body;
	try {
		const newRate = await PromotionHeader.create({
			...data,
		});
		res.status(200).send(newRate);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

const updatePromotionHeader = async (req, res) => {
	const data = req.body;
	try {
		const newRate = await PromotionHeader.update(
			{
				...data,
			},
			{
				where: {id: req.params.id},
			}
		);

		res.status(200).send(newRate);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

const getOnePromotionHeader = async (req, res) => {
	try {
		const result = await PromotionHeader.findOne({
			where: {
				id: req.params.id,
			},
			include: [
				{
					model: PromotionLine,
					as: "promotionLine",
					include: [
						{
							model: PromotionDetail,
							as: "promotionDetail",
						},
					],
				},
			],
		});

		res.status(200).send(result ? result : null);
	} catch (error) {
		res.status(500).send(error);
	}
};

const getAllPromotionHeader = async (req, res) => {
	try {
		const RateList = await PromotionHeader.findAll();

		res.status(200).send(RateList.length > 0 ? RateList : []);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

const deletePromotionHeader = async (req, res) => {
	try {
		await PromotionHeader.destroy({
			where: {id: req.params.id},
		});

		res.status(200).send("ok");
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

const createPromotionLine = async (req, res) => {
	const data = req.body;
	try {
		const newRate = await PromotionLine.create({
			title: data.title,
			startDate: data.startDate,
			endDate: data.endDate,
			status: data.status,
			description: data.description,
			promotionHeaderId: data.promotionHeaderId,
			promotionType: data.promotionType,
		});

		const promotionDetail = await PromotionDetail.create({
			percentDiscount: data.percentDiscount,
			quantityTicket: data.quantityTicket,
			purchaseAmount: data.purchaseAmount,
			moneyReduced: data.moneyReduced,
			maximumDiscount: data.maximumDiscount,
			budget: data.budget,
			promotionHeaderId: data.promotionHeaderId,
			promotionLineId: newRate.id,
			budgetUsed: 0,
		});

		res.status(200).send(promotionDetail);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

const getOnePromotionLine = async (req, res) => {
	try {
		const result = await PromotionLine.findOne({
			where: {
				id: req.params.id,
			},
			include: [
				{
					model: PromotionDetail,
					as: "promotionDetail",
				},
			],
		});

		res.status(200).send(result ? result : null);
	} catch (error) {
		res.status(500).send(error);
	}
};

const getAllPromotionLine = async (req, res) => {
	try {
		const result = await PromotionLine.findAll({
			where: {promotionHeaderId: req.params.headerId},

			include: [
				{
					model: PromotionDetail,
					as: "promotionDetail",
				},
			],
		});
		console.log(result);

		res.status(200).send(result.length > 0 ? result : []);
	} catch (error) {
		res.status(500).send(error);
	}
};

const updatePromotionLine = async (req, res) => {
	const data = req.body;
	try {
		await PromotionLine.update(
			{
				title: data.title,
				startDate: data.startDate,
				endDate: data.endDate,
				status: data.status,
				description: data.description,
			},

			{where: {id: req.params.id}}
		);

		const promotionDetail = await PromotionDetail.update(
			{
				percentDiscount: data.percentDiscount,
				quantityTicket: data.quantityTicket,
				purchaseAmount: data.purchaseAmount,
				moneyReduced: data.moneyReduced,
				maximumDiscount: data.maximumDiscount,
				budget: data.budget,
			},
			{where: {promotionLineId: req.params.id}}
		);

		res.status(200).send(promotionDetail);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

const deletePromotionLine = async (req, res) => {
	try {
		await PromotionLine.destroy({
			where: {id: req.params.id},
		});

		res.status(200).send("ok");
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

const getPromotionByTripId = async (req, res) => {
	try {
		var array = [];
		const trip = await Trip.findOne({
			where: {id: req.params.tripId},
		});

		if (!trip) {
			return res.status(200).send({data: array});
		}

		const promotionHeader = await PromotionHeader.findOne({
			where: {
				startDate: {[Op.lte]: new Date(trip.startTime)},
				endDate: {[Op.gte]: new Date(trip.startTime)},
				status: true,
			},
		});

		if (!promotionHeader) {
			return res.status(200).send({data: array});
		}

		array = await PromotionLine.findAll({
			where: {
				startDate: {[Op.lte]: new Date(trip.startTime)},
				endDate: {[Op.gte]: new Date(trip.startTime)},
				status: true,
				promotionHeaderId: promotionHeader.id,
			},
			include: [
				{
					model: PromotionDetail,
					as: "promotionDetail",
				},
			],
		});

		return res.status(200).send({data: array});
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

const updateBugetPromotionLine = async (req, res) => {
	const data = req.body;
	try {
		const promotionFind = await PromotionDetail.findOne({
			where: {promotionLineId: req.params.id},
		});

		const promotionDetail = await PromotionDetail.update(
			{
				budgetUsed: Number(promotionFind?.budgetUsed) + Number(data.budgetUsed),
			},
			{where: {promotionLineId: req.params.id}}
		);

		res.status(200).send(promotionDetail);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

module.exports = {
	createPromotionHeader,
	updatePromotionHeader,
	getOnePromotionHeader,
	getAllPromotionHeader,
	deletePromotionHeader,
	createPromotionLine,
	updatePromotionLine,
	getOnePromotionLine,
	getAllPromotionLine,
	deletePromotionLine,
	getPromotionByTripId,
	updateBugetPromotionLine,
};
