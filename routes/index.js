const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/computer/on', mainController.turnOnComputer);
router.post('/computer/on', mainController.turnOnComputer);

module.exports = router;
