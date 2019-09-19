const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user_model');

passport.serializeUser(function (user, done) {
    console.log('serialised called with user=', user);
    done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
    console.log('deserialised called with id=', id);
    const user = await User.getUserById(id);
    console.log('user=', user)
    done(null, user);
});

passport.use(new LocalStrategy({ passReqToCallback: true },
    async (req, username, password, done) => {
        console.log('passport=', req.body, username, password);
        const user = await User.getUserByUsername(username);
        if (user) {
            const is_match = await User.comparePassword(password, user.password);
            if (is_match) {
                done(null, user);
            } else {
                done(null, false, { mesage: 'Invalid Password' });
            }
        } else if (req.body.password == req.body.password2) {
            const email = req.body.email;
            const user = await new User({ email, username, password: password });
            const result = await User.createUser(user);
            console.log('new user signedin=', result);
            done(null, result);
        } else if (req.body.password != req.body.password2) {
            done(null, false, { message: 'Enter the same passwords' });
        } else {
            done(null, false, { message: 'Unknown User' });
        }
    }
))