import {Express} from "express";

import passport from "passport";
import {User} from "./User";
import {BasicStrategy} from "passport-http";

export function initializeAuthentication(app: Express) {

    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new BasicStrategy(
        function(username, password, cb) {
            if (password==='secret') {
                console.log('basic auth success');
                return cb(null, new User("", username));
            } else {
                console.log('basic auth failure');
                return cb(null, null);
            }
        }
    ));

    passport.serializeUser(function (user, cb) {
        cb(null, user);
    });

    passport.deserializeUser(function (obj, cb) {
        cb(null, obj);
    });

    app.use(function (req, res, next) {
        console.log(req.hostname);
        if (req.path !== '/login' && (!req.user)) {
            console.log(req.path + " --> redirecting to login.");
            res.redirect('/login');
        } else {
            console.log(req.path + " --> serving.");
            next();
        }
    });

    app.get('/login', passport.authenticate('basic', { session: true }), function(req, res) {
        res.redirect('/');
    });

};