require("dotenv").config()
const User = require("../models/user.model")

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
    const passport = require("passport")
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

 
passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
    // console.log(jwt_payload);
    try {
        const user = await User.findOne({ _id: jwt_payload.id }).exec();

console.log('user', user);
console.log('jwt_payload', jwt_payload);
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    } catch (err) {
        return done(err, false);
    }
}));
