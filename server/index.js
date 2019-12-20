const express = require("express");
const cors = require("cors");
const app = express();

const port = 4545;

app.use(express.static(__dirname + "/../client/dist/"));
app.use(cors());

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
})