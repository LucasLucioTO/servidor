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

routes.get("/retornaUsuario", (req, res) => {

    res.json({
        nome: "Micledson",
        idade: 19,
        sexo: "M",
        ondeMora: {
            rua: "Lino Barbosa",
            bairro: "Baixa Grande",
            numero: 42,
            cep: "57307-184",
        }
    })
})
module.exports = routes;