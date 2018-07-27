let express = require("express");
let app = express();

app.use(function(req, res, next){
    console.log(`${new Date()} - ${req.method} reqest for ${req.url}`);
    next();
});

app.use(express.static("../static"));

app.listen(8081, function(){
    console.log("Serving at 8081")
});