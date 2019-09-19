const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../models/user_model');

module.exports = (app) => {
    app.post('/auth/signup', passport.authenticate('local'), (req, res) => {
        res.send(req.user);
    });

    app.post('/auth/login',
        passport.authenticate('local'),
        (req, res) => {
            res.send(req.user);
        }
    );

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/dashboard');
    })
}