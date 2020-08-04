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


// ERROR HANDLER 404
app.use((req, res, next) => {
   
   //  res.locals.theerror = err; wont i need to define this such that it can be used in pug?
    console.log("404");
    res.status(400).render('error.pug');
   //Wont I need to use a next function so it continues to the next function, or not?

});



/* Global error handler */
app.use((err, req, res, next) => {



  // res.locals.theerror = err;  wont i need to specify such that it can be used in pug? if not where is err specified?

    if (err) {
        console.log('Global error handler called', err);
    }

    if (err.status === 400) {
        res.status(400).render('error.pug', { err });

    }


    else {
        err.message = 'Oops try again! 505 Error thrown';
        res.status(err.message || 500).render('error.pug', { err });
    }
});


app.listen(3000, () => {
    console.log("Bi Boooob bap connection is there")
});


