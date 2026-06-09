const express = require('express');
const router = express.Router();
const ledgerController = require('../controllers/ledgerController');

router.get('/', ledgerController.getAllLedgers);
router.post('/', ledgerController.createLedgerEntry);
router.put('/:id', ledgerController.updateLedgerEntry);
router.delete('/:id', ledgerController.deleteLedgerEntry);

module.exports = router;