const { find } = require('./crud')

async function checkIfExists(collectionName, datas){
    try{
        const rep = find(collectionName, datas);
        return true ? rep : false;
    } catch(e){
		console.log(e);
		throw e;
    }
}

module.exports = checkIfExists