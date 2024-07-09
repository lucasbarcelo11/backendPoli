const express = require('express');
const router = express.Router();
const project = require('../projects.json')
const equipo = require('../equipo.json')


// colocar las rutas aquí
router.get('/', (req, res) => {
    res.render('home')
});

router.get('/about-me', (req, res) => {
    res.render('about-me')
})

router.get('/project', (req, res) => {
    res.render('project', {project})
})

router.get('/team', (req, res) => {
    res.render('team', {equipo})
})

router.get('/team/:name', (req, res) => {
    const {name} = req.params
    const user = equipo.find(user => user.name === name)
    res.render('team-member', {name, user})
})

router.get('/project/:id', (req, res) => {
    const {id} = req.params
    res.send(`mostrando mi proyecto numero: ${id}`)
})

module.exports = router;
