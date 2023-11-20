console.log("9")
const User = require("../models/user.model")
const passport = require("passport");
const bcrypt = require("bcrypt");
// const User = require("../models/user.model");
const LocalStrategy = require("passport-local").Strategy;


passport.use(new LocalStrategy(
    
    async (username, password, done) => {
        try {
            console.log("6555")
            const user = await User.findOne({ username: username }) //user ke khuje neoar chesta krbo 
            if (!user) { 
                return done(null, false, {message: "incorrect username"} ); //jdi 10 no line e user ke khuje na pay tobe incorrect 
             }
             if(!bcrypt.compare(password,user.password)){
                return done(null, false, {message: "incorrect password"} ); 
             }
             return done(null, user); // jodi 10 no line e user ke khuje pay to return krbe 
        } catch (error) {
            return done(err);
        }
    }
  )); 

  //create session id
  //log in korar shomoy user id create krbe session er vetor

  passport.serializeUser((user,done)=>
  {
    done(null,user.id)
  })

  // find session info using session id

  passport.deserializeUser(async(id,done)=>{
    try{
        const user = await User.findById(id);
        done(null,user);
    }
    catch(error){
        done(error, false)
    }
  })

  module.exports = passport;