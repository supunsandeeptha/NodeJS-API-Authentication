//importing the usermodel
const userModel = require('../models/user.model.js');

module.exports ={
    //SignUp Controller
    signUp: async(req, res, next) =>{
        console.log('Sign up function has been called !');

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

        //sending a response to the cline
        res.json({user: 'created'});
    },

    // SignIn Controller
    signIn: async(req, res, next) =>{
        console.log('Sign In function has been called');     
    },

    secret: async(req, res, next) => {
        console.log('secret function has been called');
    }

}