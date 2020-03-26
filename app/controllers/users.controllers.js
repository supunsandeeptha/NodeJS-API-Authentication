const JWT = require('jsonwebtoken');
//importing the usermodel
const userModel = require('../models/user.model.js');
//importing the Json Web Token secret
const JWT_SECRET = require('../../config/token.config.js');

// Json Web Token generation as a function
signToken = user => {
    return JWT.sign({
        iss: 'supunsandeeptha',
        sub: user.id,
        iat:new Date().getTime(), // current time
        exp: new Date().setDate(new Date().getDate() + 1) //current time + 1 day ahead
    },JWT_SECRET.JSON_SECRET);
}
module.exports ={
    //SignUp Controller
    signUp: async(req, res, next) =>{
        // constants for email and password
        const email = req.value.body.email;
        const password = req.value.body.password;
        //check for a existing user 
        const foundUser = await userModel.findOne({
            email:email
        });
        if(foundUser){
            return res.status(403).json({error: 'Email is already in use '});
        }

        // new user
        const newUser = new userModel ({
            email:email,
            password:password
        });
        // using await since it will take some time to create the user
        await newUser.save();

        
        // Signing the Json Web Token Payload Section
        const token = signToken(newUser);

        //sending a response to the client with a token
        res.status(200).json({token:token});
    },

    // SignIn Controller
    signIn: async(req, res, next) =>{
        console.log('Sign In function has been called');     
    },

    secret: async(req, res, next) => {
        console.log('secret function has been called');
    }

}