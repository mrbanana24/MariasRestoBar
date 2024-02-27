const {Router} = require('express');
const AuthController = require('../controllers/AuthController');
const TableController = require('../controllers/TableController');
const CommentsController = require('../controllers/CommentsController');

const router = Router();

// login
router.post('/login', AuthController.login )

// saveIndividualDataTable
router.post('/saveIndividualDataTable', TableController.saveIndividualDataTable )

// getAllTables
router.get('/getAllTables', TableController.getAllTables )

// Save coment ->
router.post('/saveComent', CommentsController.saveComent )

module.exports = router;