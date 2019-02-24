const passport = require('passport');
const User = require('../models/user');

class UserController {
  login(req, res) {
    passport.authenticate('local')(req, res, () => {
      res.redirect('/');
    });
  }

  register(req, res) {
    User.register(
      new User({ username: req.body.username }),
      req.body.password,
      (err, user) => {
        if (err) {
          return res.status(400).json({message: err});
        }
        passport.authenticate('local')(req, res, () => {
          res.redirect('/');
        });
      }
    );
  }
}

module.exports = UserController;
