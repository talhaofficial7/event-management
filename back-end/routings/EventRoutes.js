// const express=require('express');
// const router=express.Router();
// const Event = require('../schemas/Event.js');
// const auth = require("../Authentication/Auth.js");

// router.post('/newEvent',auth, function (req, res, next) {
//     Event.create({
        
//         name: req.body.name,
//         description: req.body.description,
//         date: req.body.date,
//         time:req.body.time,
//         venue: req.body.venue,
//         image: req.body.image
//       }
//        ).then(function(item){
//         res.send(item);
//       }).catch(next);
   
//   });

//   router.get('/events',function(req,res,next){
//     Event.find({}).then(function(item){
//         res.send(item);
//       });
//   });

//   router.delete("/events",auth, function (req, res, next) {
//     Event.findByIdAndRemove({ _id: req.body.id }).then(function (item) {
//       res.send(item);
//     });
//   });

//   module.exports=router;

import express from 'express';
import Event from '../schemas/Event.js';
import auth from '../Authentication/Auth.js';

const router = express.Router();

router.post('/newEvent', auth, (req, res, next) => {
    Event.create({
        name: req.body.name,
        description: req.body.description,
        date: req.body.date,
        time: req.body.time,
        venue: req.body.venue,
        image: req.body.image
    }).then((item) => {
        res.send(item);
    }).catch(next);
});

router.get('/events', (req, res, next) => {
    Event.find({}).then((item) => {
        res.send(item);
    });
});

router.delete('/events', auth, (req, res, next) => {
    Event.findByIdAndRemove({ _id: req.body.id }).then((item) => {
        res.send(item);
    });
});

export default router;
