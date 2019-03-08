const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const path = require("path");

app.use(express.static(path.join(__dirname+'/public/dist/public') ));

require('./server/routes')(app);

app.listen(8000, function() {
    console.log("Listening on port 8000");
})