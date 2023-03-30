const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    return res.send("Oi");
});


app.listen(8081);