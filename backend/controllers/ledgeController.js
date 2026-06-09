const BottleLedger = require('../models/BottleLedger');

exports.getAllLedgers = async (req, res) => {
    try {
        const ledgers = await BottleLedger.find();
        res.status(200).json(ledgers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createLedgerEntry = async (req, res) => {
    try {
        const newEntry = new BottleLedger(req.body);
        const savedEntry = await newEntry.save();
        res.status(201).json(savedEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateLedgerEntry = async (req, res) => {
    try {
        const updatedEntry = await BottleLedger.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteLedgerEntry = async (req, res) => {
    try {
        await BottleLedger.findByIdAndDelete(req.params.id);
        res.json({ message: "Ledger entry deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};