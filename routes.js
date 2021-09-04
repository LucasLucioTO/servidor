const express = require('express')
const routes = express.Router()


routes.get("/", function(req, res) { res.send("Olá Mundo!!!!!"); });

routes.get("/exemplo", function(req, res) { res.send("uma página exemplo de rota"); });


routes.get("/luquinhasgameplay", (req, res) => {
    res.status(200).json({ message: "coe rapaziada, tudo tranquilidade" })
})

routes.get("/nomeRota", (req, res) => {
    res.sendFile(__dirname + "/index.html");

})
module.exports = routes;