const express = require('express');
const router = express.Router();
const data = require('../data.json');
const projects = data.projects;

router.get('/', (req, res) => {
    res.locals.projects = projects;
    res.render('index.pug');

});


router.get('/:id', (req, res, next) => {
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



router.get('/about', (req, res) => {

    res.render('about.pug');



});



router.use((err, req, res, next) => {

    res.locals.theerror = err;
    res.status(err.status);
    res.render('error.pug');



});



module.exports = router;