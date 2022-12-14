var createError = require('http-errors');
var express = require('express');
var cors = require("cors");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const multer = require('multer')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'http://localhost:8000/images/home/best-seller/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var producstRouter = require('./routes/products');
var checkoutlistsRouter = require('./routes/checkoutlists');
var ordersRouter = require('./routes/orders');
var customersRouter = require('./routes/customers');
var invoiceRouter = require('./routes/invoice');

var app = express();
app.use(cors());
app.post('/image', upload.single('file'), function (req, res) {
  res.json({})
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static('public'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', producstRouter);
app.use('/checkoutlists', checkoutlistsRouter);
app.use('/orders', ordersRouter);
app.use('/customers', customersRouter);
app.use('/invoice', invoiceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;