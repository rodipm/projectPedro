/*
    - src/routes/frasesRoutes.js

    Arquivo de definição das Rotas para frases.

    As rotas são parte da camada do Controlador, mas são separadas para melhor entendimento e separação do código.

    Rotas apresentam um 'endereço' e um ou mais tipos request HTTP (GET, POST, PUT, DELETE, etc...).

    Uma rota associa um endereço (url) a um controlador.

    Note que neste momento estamos analisando as rotas a partir do endereço "/frases/" - definido no arquivo app.js,
    sendo assim, as rotas descritas aqui, são anexadas ao endereço base "/frases/".


*/

const express = require("express")

const router = express.Router() // Router é utilizado para a criação de rotas no express

const frasesController = require("../controllers/frasesController")
const frase = require('../models/fraseModel')

router.get('/', frasesController.fraseHome) // Rota /frases/ associada ao controlador fraseHome

router.post('/add', frasesController.addFrase) // Rota /frases/add associada ao controlador addFrase

module.exports = router;  