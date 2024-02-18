const { insertOne, findOne } = require("../services/db/crud");
const { checkIfExists } = require("../services/db/checkIfExists");

const collection = "users";

async function findUser(req, res, next){
    try{
        const result = await findOne(collection, req.query);
        return res.send(result);
    } catch(e){
        console.log(e);
        return next(e);
    }
}

async function createUser(req, res, next){
    try{
        const newUser = req.body;
        // const exist = await checkIfExists(collection, { email: newUser.email });
        // if(exist){
        //     console.log(`Detection d'un conflit lors de l'enregistrement d'un nouvel utilisateur: ${newUser}`);
        //     return res.status(409).send("Conflict");
        // }
        const result = await insertOne(collection, newUser);
        console.log(`Nouvel utilisateur enregistré, id: ${result.insertedId}`);
        return res.status(201).send(result); 
    } catch(e){
        console.log(e);
        return next(e);
    }
}

module.exports = {
    findUser,
    createUser
}