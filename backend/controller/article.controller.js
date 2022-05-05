const
    path = require('path'),
    { articleService } = require(path.join(__dirname, '..', 'service'));

exports.getAllExternalArticles = async(req, res, next ) => {
    try {
        console.log("Controller:", "Calling getExternalArticle service method");
        let response = await articleService.getAllExternalArticles();
        console.log("Received: ", response);
        res.status(200).json(response);
    }
    catch(error) {
       console.log("Error while calling the article service: ", error);
       res.status(500).json({"error": error});
    }
};