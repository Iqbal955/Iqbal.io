//$(document).foundation()
const express = require('express');
const app = express();
var indexRouter = require('./routes/index');

app.use(express.static('public'));

app.engine('pug', require('pug').__express)

app.set('view engine', 'pug');


app.use('/', indexRouter);



/*
app.use((req, res, next) => {
    console.log("in error object");
    res.status = 500;
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

*/


// ERROR HANDLERS 404
app.use((req, res, next) => {
    res.locals.theerror = err;

    console.log("404");
    res.status(400).render('error.pug');
    next(); //passing the error

});

// ERROR HANDLERS 500
app.use((req, res, next) => {
    res.locals.theerror = err;

    console.log("500");
    res.status(500).render('error.pug');

    next(); //passing the error to the next middleware
 
});

/* Global error handler */
app.use((err, req, res, next) => {



    res.locals.theerror = err;

    if (err) {
        console.log('Global error handler called', err);
    }

    if (err.status === 400) {
        res.status(400).render('error.pug', { err });

    }


    else {
        err.message = 'Oops try again! 505 Error thrown';
        res.status(500).render('error.pug', { err });
    }
});


app.listen(3000, () => {
    console.log("Bi Boooob bap connection is there")
});


