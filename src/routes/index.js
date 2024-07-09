const express = require('express');
const router = express.Router();
const project = require('../projects.json')

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


router.get('/team/lucas', (req, res) => {
    res.send("Este es Lucas")
})

router.get('/team/:name', (req, res) => {
    const {name} = req.params
    res.send('conoce al miembro del equipo ' + name)
})

router.get('/project/:id', (req, res) => {
    const {id} = req.params
    res.send(`mostrando mi proyecto numero: ${id}`)
})

module.exports = router;
