const db = require('../config/db');

module.exports.signIn = async (refresh_token)=>{
    //sign in repo --> updates refresh token in DB:
    return db('user_tokens').update({refresh_token}).where({id});
};

module.exports.signUp = async ({refresh_token,user_name, email, pword, role_id})=>{
    //sign up repo --> insert new user
    return {
        insertUserData:db('user').insert({user_name,email, pword,role_id}),
        inserUserToken:db('tokens').insert({refresh_token})
    };
    
};

module.exports.signOut = async ()=>{
    
};