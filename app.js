const express = require('express');
const app = express();
const routes = require("./routes")

// app.use(express.static(path.join(__dirname)))
app.use(routes)

app.listen(8888, function() { console.log("Servidor rodando"); });