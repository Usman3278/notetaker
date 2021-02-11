// add required modules
const express = require("express");
const path = require("path");

// create an express server & set a port to 8000
const app = express();
const PORT = process.env.PORT || 8000;

// Read URL or JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// ROUTER
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Use public folder
app.use(express.static("public"));

//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});