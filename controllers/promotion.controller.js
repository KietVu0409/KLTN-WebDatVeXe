const {PromotionHeader, PromotionLine, PromotionDetail} = require("../models");

// header
const createPromotionHeader = async (req, res) => {
	const data = req.body;
	try {
		const newRate = await PromotionHeader.create({
			...data,
		});
		res.status(201).send(newRate);
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

		res.status(201).send(newRate);
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

		res.status(200).send(result);
	} catch (error) {
		res.status(500).send(error);
	}
};

const getAllPromotionHeader = async (req, res) => {
	try {
		const RateList = await PromotionHeader.findAll();

		res.status(200).send(RateList);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

const deletePromotionHeader = async (req, res) => {
	try {
		const newRate = await PromotionHeader.destroy({
			where: {id: req.params.id},
		});

		res.status(201).send(newRate);
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
};
