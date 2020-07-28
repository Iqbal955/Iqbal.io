//$(document).foundation()
const express = require('express');
const app = express();
const data = require('./data.json');
const projects = data.projects;


app.use(express.static('public'));

app.engine('pug', require('pug').__express)

app.set('view engine', 'pug');



app.use((req, res, next) => {
    console.log("in error object");
    const err = new Error("Woooops! There was an error!");
    err.status = 500;
    next(err);

});



//index


app.get('/',  (req, res) => {
   res.locals.projects = projects;
    res.render('index.pug');

});


app.get('/:id', (req, res, next) => {
    // res.locals.projectinfo = projectinfo;
    res.render('project.pug', {
        description: projects[req.params.id].description,
        project_name: projects[req.params.id].project_name,
        github: projects[req.params.id].github_link,
        livelink: projects[req.params.id].live_link,
        images: projects[req.params.id].image_urls,
        tech: projects[req.params.id].technologies
       




    });

    next();

});



app.get('/about', (req, res) => {

    res.render('about.pug');



});



app.use((err, req, res, next ) => {

    res.locals.theerror = err;
    res.status(err.status);
    res.render('error.pug');



});


app.get('/project', (req, res) => {


    res.locals.projectinfo = projectinfo;
    res.render('project.pug');



});



app.listen(3000, () => {
    console.log("Bi Boooob bap connection is there")
});