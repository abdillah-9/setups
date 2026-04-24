const db = require('../config/db');

module.exports.signIn = async (refreshToken, userId)=>{

    return db.transaction(async(trx)=>{
        
        //update refresh token
        await trx('tokens').update({refreshToken}).where({userId});

        //fetch userData
        const [userData] = await trx('users').fetch({fullName, email, avatar, phoneNumber});

        return userData;
    });
};

module.exports.signUp = async ({refreshToken,fullName, userEmail, userPword, roleId, avatar})=>{

    return db.transaction(async(trx)=>{

        //insert userData
        const [userId] = await trx('users').insert({fullName, userEmail, userPword, roleId, avatar});

        //insert token
        await trx('tokens').insert({refreshToken, userId});

        //select userData using this userId
        const [userData] = await trx('users').select({fullName, userEmail,avatar, roleId});

        return userData;
    })
    
};

module.exports.signOut = async ()=>{
    
};