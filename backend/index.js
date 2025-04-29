const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 3001;

dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("MTS Transit API is running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
