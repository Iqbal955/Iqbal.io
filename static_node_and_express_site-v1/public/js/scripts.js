//$(document).foundation()
const express = require('express');
const app = express();


app.engine('pug', require('pug').__express)

app.set('view engine', 'pug');

app.listen(3000, () => {
    console.log("Bi Boooob bap connection is there")
});




app.get('/', (req, res) => {

   res.render('<h1>Mic check 123</>');

});


app.get('/about', (req, res) => {

    res.render('index.pug');



});

