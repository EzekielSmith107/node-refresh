const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const { generateMonster } = require("./controller");

// Endpoint
app.get("/api/monster", generateMonster);

app.listen(4000, () => console.log("Sever running on 4000"));
