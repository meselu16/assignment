const
    mongoose = require('mongoose'),
    path = require('path'),
    { Article } = require(path.join(__dirname, '..', 'model'));


    async function getAllExternalArticles() {
        console.log("Service: calling DB");
        return await Article.find();
    }

module.exports = {
    getAllExternalArticles
};