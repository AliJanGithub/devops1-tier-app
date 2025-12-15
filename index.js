const express = require("express");
const cors = require("cors");
const app = express();
   app.use(express.json());
   app.use(cors())
// Root route
app.get("/", (req, res) => {
    res.json({ result: "id and updated code" });
});
// Address route with dynamic id
app.get("/address", (req, res) => {
       // <-- get id from URL
     return res.json({ result: "done -- bsro" });
});

// Start server
app.listen(3000, () => {
    console.log("App is running on port 3000");
});
