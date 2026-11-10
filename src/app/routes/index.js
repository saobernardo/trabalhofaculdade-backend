const express = require("express");
const router = express.Router();
const filmesController = require('../controllers/FilmesController');

router.get('/filme', filmesController.list);
// router.get('/filme/:id', filmesController.get);
// router.get('/filtro/filme', filmesController.search);

module.exports = router;