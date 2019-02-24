const cookieParser = require('cookie-parser');
const express = require('express');
const session = require('express-session');
const httpErrors = require('http-errors');
const logger = require('morgan');
const { format: { combine, timestamp, printf }, transports } = require('winston');
const expressWinston = require('express-winston');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');

const indexRouter = require('./routes/index');
const articleRouter = require('./routes/article');

const app = express();

// winston logger
const myFormat = printf(info => `Date: [${info.timestamp}] ${info.level}: ${info.message}`);

const winstonLogger = expressWinston.logger({
  format: combine(
    timestamp(),
    myFormat,
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log' })
  ]
});

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.set('views', path.join(__dirname, 'views'));
app.use(allowCrossDomain);
// view engine setup
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(winstonLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// session
app.use(session({
  secret: 'secrettexthere',
  saveUninitialized: true,
  resave: true,
}));

app.use(passport.initialize());
app.use(passport.session());


// passport config
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.authenticate('facebook');

// routers
app.use('/', indexRouter);
app.use('/article', articleRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(httpErrors(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
