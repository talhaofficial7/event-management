// const express = require('express');
// const router = express.Router();
// const User = require('../schemas/User.js');

// const jwt = require("jsonwebtoken");
// const bodyParser = require("body-parser");
// require("dotenv").config();

// const accessTokenSecret = process.env.TOKEN_SECRET;

// router.post("/login", async function (req, res) {
//     const user = await User.findOne({
//         email: req.body.email,
//         password: req.body.password,
//     });

//     if (user) {
//         // Generate an access token
//         const accessToken = jwt.sign(
//             { id: user._id },
//             accessTokenSecret
//         );


//         res.json({
//             accessToken,

//         });
//     } else {
//         res.json({ error: "Username or password incorrect" });
//     }
// });

// router.post('/newUser', function (req, res, next) {
//     User.create({

//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,

//     }
//     ).then(function (item) {
//         res.send(item);
//     }).catch(next);

// });
// module.exports = router;

import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../schemas/User.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const accessTokenSecret = process.env.TOKEN_SECRET;

router.post('/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    });

    if (user) {
        const accessToken = jwt.sign({ id: user._id }, accessTokenSecret);
        res.json({ accessToken });
    } else {
        res.json({ error: 'Username or password incorrect' });
    }
});

router.post('/newUser', (req, res, next) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then((item) => {
        res.send(item);
    }).catch(next);
});

export default router;
