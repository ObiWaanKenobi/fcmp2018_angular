const { Router } = require('express');
const ArticleController = require('../controllers/ArticleController');
const UserController = require('../controllers/UserController');

const router = Router();
const articleController = new ArticleController();
const userController = new UserController();

// get all articles by default
router.get('/', articleController.findAll);

router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
