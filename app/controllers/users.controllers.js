module.exports ={

    //SignUp Controller
    signUp: async(req, res, next) =>{
        console.log('Sign up function has been called !');
    },

    // SignIn Controller
    signIn: async(req, res, next) =>{
        console.log('Sign In function has been called');
    },

    secret: async(req, res, next) => {
        console.log('secret function has been called');
    }

}