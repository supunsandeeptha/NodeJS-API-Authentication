const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const {ExtractJwt} = require('passport-jwt');
const User = require
//importing the token config file
const JWT_SECRET = require('../../config/token.config.js');

// passport to decode the token and identify the user
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey:JWT_SECRET.JSON_SECRET,

},async (payload, done) => {
    try{
        
    }catch(error){
        done(error, false);
    }
    
}));