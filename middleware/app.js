var express = require("express");
var cors = require("cors");


var app = express();
app.use(cors());


app.get('/id', (req, res) => {
  request(
    { url: 'https://pubmed.ncbi.nlm.nih.gov//id' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

