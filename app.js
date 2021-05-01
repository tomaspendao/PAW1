var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");

var fs = require("fs");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var indexRouter = require("./routes/index");
var promoterRouter = require("./routes/promoters");
var eventRouter = require("./routes/events");
var locationRouter = require("./routes/locations");
var adminRouter = require("./routes/admins");

const { log } = require("console");
const eventController = require("./controllers/eventController");

var app = express();
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/", indexRouter);
app.use("/promoters", promoterRouter);
app.use("/events", eventRouter);
app.use("/locations", locationRouter);
app.use("/admins", adminRouter);
//app.use('/users', usersRouter);
//app.use('/criar', criarRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
