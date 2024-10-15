const { PriceHeader, PriceLine, Station } = require("../models");

const createPriceHeader = async (req, res) => {
    const data = req.body;
    try {
        const newRate = await PriceHeader.create({
            ...data,
        });
        res.status(201).send(newRate);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
};
const createPriceLine = async (req, res) => {
    const data = req.body;
    try {
        const newRate = await PriceLine.create({
            ...data,
        });
        res.status(201).send(newRate);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getAllPriceHeader = async (req, res) => {
    try {
        const RateList = await PriceHeader.findAll();

        res.status(200).send(RateList);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getOnePriceHeader = async (req, res) => {
    try {
        const result = await PriceHeader.findOne({
            where: {
                id: req.params.idHeader
            },
            include: [
                {
                    model: PriceLine,
                    as: "priceLine",
                },
            ]
        });

        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getOnePriceLine = async (req, res) => {
    try {
        const result = await PriceLine.findOne({
            where: {
                id: req.params.idLine
            }
        });

        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getAllPriceLine = async (req, res) => {
    try {
        const RateList = await PriceLine.findAll({
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

        res.status(200).send(RateList);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
};


const updatePriceHeader = async (req, res) => {
    const data = req.body;
    try {
        const newRate = await PriceHeader.update(
            {
                ...data,
            },
            {
                where: { id: req.params.id }
            });

        res.status(201).send(newRate);
    } catch (error) {
        console.log(error)
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
                where: { id: req.params.id }
            });

        res.status(201).send(newRate);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
};


const deletePriceLine = async (req, res) => {
    try {
        const newRate = await PriceLine.destroy(
            {
                where: { id: req.params.id }
            });

        res.status(201).send(newRate);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
};


const deletePriceHeader = async (req, res) => {
    try {
        const newRate = await PriceHeader.destroy(
            {
                where: { id: req.params.id }
            });

        res.status(201).send(newRate);
    } catch (error) {
        console.log(error)
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
    deletePriceLine
};
