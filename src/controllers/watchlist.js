const { insertOne, findOne } = require("../services/db/crud");
const collection = "watchlist";

async function findWatchlist(req, res, next){
    try{
        const result = await findOne(collection, req.query);
        return res.send(result);
    } catch(e){
        console.log(e);
        return next(e);
    }
}

async function createWatchlist(req, res, next){
    try{
        const newWatchlist = req.body;

        const result = await insertOne(collection, newWatchlist);
        console.log(`Nouvel watchlist enregistré, id: ${result.insertedId}`);
        return res.status(201).send(result); 
    } catch(e){
        console.log(e);
        return next(e);
    }
}

module.exports = {
    findWatchlist,
    createWatchlist
}