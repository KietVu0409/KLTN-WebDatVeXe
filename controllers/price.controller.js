const {Op} = require("sequelize/lib/sequelize");
const {PriceHeader, PriceLine, Station} = require("../models");

const createPriceHeader = async (req, res) => {
	const data = req.body;
	try {
		const newRate = await PriceHeader.create({
			...data,
		});
		res.status(200).send(newRate);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};
const createPriceLine = async (req, res) => {
	const data = req.body;
	try {
		const newRate = await PriceLine.create({
			...data,
		});
		res.status(200).send(newRate);
	} catch (error) {
		res.status(500).send(error);
	}
};

const getAllPriceHeader = async (req, res) => {
	try {
		const RateList = await PriceHeader.findAll();

		res.status(200).send(RateList.length > 0 ? RateList : []);
	} catch (error) {
		res.status(500).send(error);
	}
};

const getOnePriceHeader = async (req, res) => {
	try {
		const result = await PriceHeader.findOne({
			where: {
				id: req.params.idHeader,
			},
			include: [
				{
					model: PriceLine,
					as: "priceLine",
					include: [
						{
							model: Station,
							as: "fromStationFK",
						},
						{
							model: Station,
							as: "toStationFK",
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

const getOnePriceLine = async (req, res) => {
	try {
		const result = await PriceLine.findOne({
			where: {id: req.params.idLine},
			include: [
				{
					model: Station,
					as: "fromStationFK",
				},
				{
					model: Station,
					as: "toStationFK",
				},
			],
		});

		res.status(200).send(result ? result : null);
	} catch (error) {
		res.status(500).send(error);
	}
};

const getAllPriceLine = async (req, res) => {
	try {
		const RateList = await PriceLine.findAll({
			where: {priceHeaderId: req.params.idHeader},
			include: [
				{
					model: Station,
					as: "fromStationFK",
				},
				{
					model: Station,
					as: "toStationFK",
				},
			],
		});

		res.status(200).send(RateList.length > 0 ? RateList : []);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

const updatePriceHeader = async (req, res) => {
	const data = req.body;
	try {
		if (req.body.status) {
			const price = await PriceHeader.findOne({
				where: {id: req.params.id},
			});

			const priceHeaders = await PriceHeader.findAll({
				where: {
					endDate: {[Op.gte]: new Date(price.startDate)},
					status: true,
					id: {[Op.notIn]: [req.params.id]},
				},
			});

			if (priceHeaders.length > 0) {
				return res.status(400).send({message: "Can not update status"});
			}
		}

		const newRate = await PriceHeader.update(
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

const updatePriceLine = async (req, res) => {
	const data = req.body;
	try {
		const newRate = await PriceLine.update(
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

const deletePriceLine = async (req, res) => {
	try {
		await PriceLine.destroy({
			where: {id: req.params.id},
		});

		res.status(200).send("ok");
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

const deletePriceHeader = async (req, res) => {
	try {
		await PriceHeader.destroy({
			where: {id: req.params.id},
		});

		res.status(200).send("ok");
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};
module.exports = {
	createPriceHeader,
	createPriceLine,
	getAllPriceHeader,
	getAllPriceLine,
	getOnePriceLine,
	getOnePriceHeader,
	updatePriceHeader,
	updatePriceLine,
	deletePriceHeader,
	deletePriceLine,
};
