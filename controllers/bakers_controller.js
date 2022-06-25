// DEFINE DEPENDENCIES
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')

// TELL THE PROGRAM TO LOAD THE BAKER SEED SCRIPT
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

// CREATE GET ROUTE FOR VIRTUAL
baker.get('/', (req, res) => {
    Baker.find()
        .populate('breads')
        .then(foundBakers => {
            res.send(foundBakers)
        })
})

// BAKER SHOW PAGE GET ROUTE
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate('breads')
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})


// EXPORT CONTROLLER
module.exports = baker                    
