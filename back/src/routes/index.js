const {Router} = require('express');
const AuthController = require('../controllers/AuthController');
const TableController = require('../controllers/TableController');
const CommentsController = require('../controllers/CommentsController');
const SummaryDaysController = require('../controllers/SummaryDaysController');

const router = Router();

// login
router.post('/login', AuthController.login )



// /-------------------------------------/ ROUTES TABLES /-------------------------------------/
// saveIndividualDataTable
router.post('/saveIndividualDataTable', TableController.saveIndividualDataTable )

// getAllTables
router.get('/getAllTables', TableController.getAllTables )

// getTablesByDate
router.post('/getTablesByDate', TableController.getTablesByDate )

// deleteTable
router.post('/deleteTable', TableController.deleteTable )

// editTableById
router.post('/editTable', TableController.editTable )

// /-------------------------------------/ ROUTES COMMENTS /-------------------------------------/
// Save coment ->
router.post('/saveComent', CommentsController.saveComent )

// getAllComments
router.get('/getAllComments', CommentsController.getAllComents )

// getCommentsByDate
router.post('/getCommentsByDate', CommentsController.getComentsByDate )

// DeleteCommentById
router.post('/deleteComment', CommentsController.deleteComentById)

// EditCommentById
router.post('/editComment', CommentsController.editComment)

module.exports = router;

// /-------------------------------------/ ROUTES SUMMARY /-------------------------------------/
// getSummaryDayByDate
router.post('/getSummaryDayByDate', SummaryDaysController.getSummaryDayByDate )

// putSummaryDay
router.put('/putSummaryDay', SummaryDaysController.putSummaryDay )

// saveCaja
router.post('/saveCaja', SummaryDaysController.saveCaja )

// getCajaValue
router.get('/getCajaValue', SummaryDaysController.getCajaValue )

// getSummaryCurrentMonth
router.get('/getSummaryMonthData', SummaryDaysController.getSummaryMonthData)
