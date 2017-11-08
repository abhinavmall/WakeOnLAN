const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/computer/on', mainController.wakeComputer);
router.post('/computer/on', mainController.wakeComputer);

module.exports = router;
