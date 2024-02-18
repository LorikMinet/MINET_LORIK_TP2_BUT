const { insertOne, findOne } = require("../services/db/crud");
const collection = "film";

async function findFilm(req, res, next){
    try{
        const result = await findOne(collection, req.query);
        return res.send(result);
    } catch(e){
        console.log(e);
        return next(e);
    }
}

async function createFilm(req, res, next){
    try{
        const newFilm = req.body;

        const result = await insertOne(collection, newFilm);
        console.log(`Nouveau film enregistré, id: ${result.insertedId}`);
        return res.status(201).send(result); 
    } catch(e){
        console.log(e);
        return next(e);
    }
}

module.exports = {
    findFilm,
    createFilm
}