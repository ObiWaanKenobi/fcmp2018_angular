const { Router } = require('express');
const ArticleController = require('../controllers/ArticleController');

const router = Router();
const controller = new ArticleController();

// const checkIsAuthenticated = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.status(400).json({
//     message: 'access denied'
//   });
// };

router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
