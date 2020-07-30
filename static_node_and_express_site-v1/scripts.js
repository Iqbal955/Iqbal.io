//$(document).foundation()
const express = require('express');
const app = express();
var indexRouter = require('./routes/index');

app.use(express.static('public'));

app.engine('pug', require('pug').__express)

app.set('view engine', 'pug');


app.use('/', indexRouter);




app.use((req, res, next) => {
    console.log("in error object");
    const err = new Error("Woooops! There was an error!");
    err.status = 500;
    next(err);

});

app.use((req, res, next) => {
    console.log("in error object");
    const err = new Error("Page not found!");
    err.status = 400;
    next(err);

});

app.use((err, req, res, next) => {

    res.locals.theerror = err;
    res.status(err.status);
    res.render('error.pug');



});

app.listen(3000, () => {
    console.log("Bi Boooob bap connection is there")
});



