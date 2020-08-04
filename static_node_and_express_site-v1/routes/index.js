const express = require('express');
const router = express.Router();
const data = require('../data.json');
const projects = data.projects;

router.get('/', (req, res) => {
    res.locals.projects = projects;
    res.render('index.pug');

});


router.get('/about', (req, res) => {

    res.render('about.pug');



});


router.get('/:id', (req, res, next) => {
    res.locals.projects = projects;

        // res.locals.projectinfo = projectinfo;
    if (projects[req.params.id]) {
        res.render('project.pug', {

            description: projects[req.params.id].description,
            project_name: projects[req.params.id].project_name,
            github: projects[req.params.id].github_link,
            livelink: projects[req.params.id].live_link,
            images: projects[req.params.id].image_urls,
            tech: projects[req.params.id].technologies





        });
    }



    else {

            const err = new Error();
            err.status = 404;
            err.message = 'Woops! Page not found';
            next(err);
        }


    

 

});




module.exports = router;