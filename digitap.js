const express = require('express');
const router = express.Router();
const Digitap = require('../model/digitap');
const mongoose = require('mongoose');

router.get('/',(req,res,next)=>{
    Digitap.find()
    .then(result =>{
        res.status(200).json({
            model:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
})

router.get('/:id',(req,res,next)=>{
    Digitap.find().byUserId(req.params.id)
    .then(result =>{
        res.status(200).json({
            DigiModel:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
})

router.post('/',(req,res)=>{
        const digitap = new Digitap({
            _id:new mongoose.Types.ObjectId,
            syncId: req.body.syncId,
            status: req.body.status,
            userId: req.body.userId
        })
    digitap.save()
    .then(result =>{
        console.log(result)
        res.status(200).json({
            newdigitap:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

module.exports = router;