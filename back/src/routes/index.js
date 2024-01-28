const {Router} = require('express');
const AuthController = require('../controllers/AuthController');
const TableController = require('../controllers/TableController');

const router = Router();

// login
router.post('/login', AuthController.login )

// saveIndividualDataTable
router.post('/saveIndividualDataTable', TableController.saveIndividualDataTable )

// getAllTables
router.get('/getAllTables', TableController.getAllTables )

module.exports = router;