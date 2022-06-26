const express = require('express');
const app = express();
const digitapRoute = require('./api/routes/digitap');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://mongod:mongod@sampledigitap.svkgy.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on('error',err =>{
    console.log('connection failed');
});

mongoose.connection.on('connected',connected =>{
    console.log('connected with digitap database...');
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/v1/get-user-score', digitapRoute);

app.use((req,res,next)=>{
    res.status(404).json({
        error:'not found'
    })
})

module.exports = app;