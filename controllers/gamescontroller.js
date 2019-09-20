const router = require('express').Router();
const Games = require('../db').import('../models/games');
const validateSession = require('../middleware/validate-session');

//Get all games
router.get('/', (req, res) => {
    Games.findAll()
        .then(games => res.status(200).json(games))
        .catch(err => res.status(500).json({
            error: err
        }))
    
})

//Get one game specifically
router.get('/:id', (req, res) => {
    Games.findOne({ where: {id: req.params.id}})
        .then(games => res.status(200).json(games))
        .catch(err => res.status(500).json({
            error: err
        }))
    
})

//Create new game
router.post('/createGame', validateSession, (req, res) => {
    const gamesFromRequest = {
        nameOfGame: req.body.nameOfGame,
        gameGenre: req.body.gameGenre,
        gamePrice: req.body.gamePrice,
        developer: req.body.developer
    }

    Games.create(gamesFromRequest)
        .then(games => res.status(200).json(games))
        .catch(err => res.json(req.errors))
})  

//Update game
router.put('/update/:id', (req, res) => {
    Games.update({ 
        nameOfGame: req.body.nameOfGame,
        gameGenre: req.body.gameGenre,
        gamePrice: req.body.gamePrice,
        developer: req.body.developer
    },
    {  
        where: { 
            id: req.params.id 
        }
    })

    .then(games => res.status(200).json(games))
    .catch(err => res.json(req.errors))
});


//Delete game
router.delete('/delete/:id', (req, res) => {
    Games.destroy({ 
        where: { id: req.params.id }})
            .then(games => res.status(200).json(games))
            .catch(err => res.json(req.errors))
})
module.exports = router;