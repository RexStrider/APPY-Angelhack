const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const expressValidator = require('express-validator');
const fs = require("fs");
const cors = require("cors");
const config = require('./config');


// db
// MONGO_URI=mongodb://localhost/nodeapi
mongoose
    .connect(config.mongoURI, { useNewUrlParser: true })
    .then(() => console.log("Connecting to mongodb"))
    .catch(err => console.error(err));


// Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
// apiDocs
app.get("/api", (req, res) => {
    fs.readFile("docs/apiDocs.json", (err, data) => {
        if (err) {
            res.status(400).json({
                error: err
            });
        }
        const docs = JSON.parse(data);
        res.json(docs);
    });
});


// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use(function(err, req, res, next) {
    if (err.name === "UnauthorizedError") {
        res.status(401).json({ error: "Unauthorized!" });
    }
});


// Production Mode
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Connecting to port ${port}`);
});