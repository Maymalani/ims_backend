var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var app = express();
require('dotenv').config();
// require('./dbConnection/dbConnect')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var branchRouter = require('./routes/branch');
var roleRouter = require('./routes/role');
var refRouter = require('./routes/ref');
var courseRouter = require('./routes/course');
var statusRouter = require('./routes/status');
var inquiryRouter = require('./routes/inquiry');
var followupRouter = require('./routes/followup');

var app = express();

var corsOption = {
  origin: "https://inquiry-management-system-nine.vercel.app",
  methods: "GET,POST,PUT,PATCH,DELETE,HEAD",
  credentialS: "true"
}

app.use(cors(corsOption));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", '*');
  next();
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', indexRouter);
app.use('/branch', branchRouter);
app.use('/role', roleRouter);
app.use('/ref', refRouter);
app.use('/course', courseRouter);
app.use('/status', statusRouter);
app.use('/inquiry', inquiryRouter);
app.use('/follow', followupRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Port Running on ${port}`);
})

module.exports = app;
