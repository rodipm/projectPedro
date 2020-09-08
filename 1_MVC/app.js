/*
    - app.js

    Arquivo base do servidor.

    Inicia-se a aplicação rodando este arquivo - npm start OU npm run dev.

    Criam-se as rotas base e as associam as sub-rotas definidas em src/routes

*/

const express = require("express") // Framework para servidores HTTP
const bodyParser = require("body-parser") // Middleware para Express - tratamento dos requests recebidos
const path = require("path") // Biblioteca do node para tratar caminhos de arquivos de forma correta

// Cria a instancia do aplicativo
const app = express()

// Configurações do express
app.use(bodyParser.urlencoded({ extended: false })) // config basica padrao
app.use(bodyParser.json()) // config basica padrao

app.set('view engine', 'ejs') // config para usar o ejs para renderizar as páginas
app.set("views", path.resolve(__dirname, 'src', 'views')) // config para setar o diretório em que as views estão


// Definição base das rotas (parte do CONTROLLER)
const frasesRoutes = require('./src/routes/frasesRoutes')
app.use('/', frasesRoutes)
app.use('/frases/', frasesRoutes)


// Inicia o servidor
var port = process.env.port || 3000;

app.listen(port, () => console.log(`Servidor ligado em http://localhost:${port}/`))

module.exports = app;  