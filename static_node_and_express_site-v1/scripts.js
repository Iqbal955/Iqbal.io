//$(document).foundation()
const express = require('express');
const app = express();

app.use(express.static('public'));

app.engine('pug', require('pug').__express)

app.set('view engine', 'pug');

app.listen(3000, () => {
    console.log("Bi Boooob bap connection is there")
});


//index
var projectinfo = 
[
{ title: 'Project 1', img: 'https://placehold.it/550x350', link: '/project1', desc: "A cool random quote generator to keep you motivated for your next cool project", tech: "JavaScript + HTML test01", projectimg1: "https://ae01.alicdn.com/kf/HTB1BPzvaND1gK0jSZFKq6AJrVXa6.jpg", projectimg2: "https://media.pitchfork.com/photos/5d88391409b36e0009899ef2/2:1/w_2560%2Cc_limit/Aaron-Paul.jpg", projectimg3: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbreakingbad.fandom.com%2Fwiki%2FGustavo_Fring&psig=AOvVaw2RdR3D80zLm6u-3_RZWITX&ust=1595681635793000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjPkb335eoCFQAAAAAdAAAAABAJ"}, 
{ title: 'Project 2', img: 'https://placehold.it/550x550', link: '/project2', desc: 'Filtering a bunch of fetched user data, and using pure JS', tech: "JavaScript test02"  },
{ title: 'Project 3', img: 'https://placehold.it/550x550', link: '/project3', desc: "A cool random quote generator to keep you motivated for your next cool project", tech: "JavaScript HTML CSS test 3 ", projectimg1: "https://cdn.theatlantic.com/thumbor/GjZZ4A50zQaqEu2wY_zTTLOxFq8=/0x194:802x645/720x405/filters:format(png)/media/old_wire/img/upload/2013/09/11/saul/original.png"}, 
{ title: 'OOP Game', img: 'https://placehold.it/550x550', link: '/project4', desc: "Very fun game, where you have to guess a phrase, if you dont, you lose a point!", tech: "OOB JavaScript test4"}, 
{ title: 'Public API request', img: 'https://placehold.it/550x550', link: '/project5', desc: 'Getting a public API request with random user data, and displaying their information', tech: "JavaScript JSON HTML test5"}
]


app.get('/',  (req, res) => {
   res.locals.projectinfo = projectinfo;
   res.render('index.pug');

});


app.get('/:id', (req, res) => {
    // res.locals.projectinfo = projectinfo;
    res.render('project.pug', {

        img1: projectinfo[req.params.id].projectimg1,
        img2: projectinfo[req.params.id].projectimg2,
        img3: projectinfo[req.params.id].projectimg3,
        tech: projectinfo[req.params.id].tech
       




    });

});


app.get('/about', (req, res) => {

    res.render('about.pug');



});


app.get('/project', (req, res) => {


    res.locals.projectinfo = projectinfo;
    res.render('project.pug');



});

