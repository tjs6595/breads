// REQUIRE MONGOOSE 
const mongoose = require('mongoose')
// CREATING SHORTHAND FOR THE SCHEMA CONSTRUCTOR 
const { Schema } = mongoose 

// IMPORT THE MODEL FOR A VIRTUAL
const Bread = require('./bread.js')

// DEFINE THE BAKER SCHEMA
const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    },
    startDate: { type: Date, required: true },
    image: { type: String, default: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
    bio:{ type: String }
    },
    {toJSON: {virtuals: true}})

// CREATE THE VIRTUAL
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

// CREATE THE BAKER MODEL BASED OFF OF THE BAKER SCHEMA
const Baker = mongoose.model('Baker', bakerSchema)

// EXPORT THE BAKER MODEL SO IT CAN BE USED THROUGHOUT THE PROJECT
module.exports = Baker