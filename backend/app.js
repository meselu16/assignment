const express = require('express'),
    cors = require('cors'),
    path = require('path'),
    dotenv = require('dotenv'),
    mongoose = require('mongoose'),
    {initRoutes } = require(path.join(__dirname, 'route'));

    // set up the environment variables 
    dotenv.config();
    const app = express();

    app.use(cors());
    app.use(express.json());

    // app.use(function (req, res, next) {
    //     console.log(req.headers)
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //     res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
    //     res.setHeader('Access-Control-Allow-Headers', '*');
    //     res.setHeader('Access-Control-Allow-Credentials', true);
    //     next();
    //   });

    initRoutes(app);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

mongoose.connect(process.env.DB_CONNECT,
    () => {
        app.listen(port);
        console.log("server is Up and running at: " + port);
        
    }, function(err) { console.log(error)}
);


