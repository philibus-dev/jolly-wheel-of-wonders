const express = require('express'),
	path = require('path'),
	cookieParser = require('cookie-parser'),
	logger = require('morgan'),
	RateLimit = require('express-rate-limit'),
	cors = require('cors'),
	IndexController = require('./controllers/index.controller');

const index_controller = new IndexController();

const indexRouter = require('./routes/index'),
	apiRouter = require('./routes/api');

const app = express();

const limiter = RateLimit({
	windowMs: .5 * 60 * 1000, // 30 seconds
	max: 100, // max 100 request per windowMS
});

app.use(limiter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

const allowedOrigins = ['http://jollywheelofwonders.com', 'https://jollywheelofwonders.com', 'http://localhost:4200', 'http://localhost:8080', 'http://localhost'];
app.use(cors({
	origin: function(origin, callback){
		if(!origin) return callback(null, true);
		if(allowedOrigins.indexOf(origin) === -1){
			const msg = 'The CORS policy for this site does not allow access from the specified Origin ' + origin;
			return callback(new Error(msg), false);
		}
		return callback(null, true);
	}

}));

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(index_controller.handleFourOfour);

// error handler
app.use(function (err, req, res) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
