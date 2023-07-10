const express = require ('express');
const { getServiceById } = require('../controllers/serviceController');

const router = express.Router();

// router.get('/', getAllServices);
router.get('/:id', getServiceById);

module.exports = router;