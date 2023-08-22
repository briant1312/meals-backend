const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();
require("./config/database");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(logger("dev"));
app.use(express.json());
// :TODO update origin once pushed to production
app.use(cors());

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
