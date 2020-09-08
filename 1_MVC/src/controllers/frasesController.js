/*
    - src/controllers/frasesController.js

    Arquivo de definição dos controladores para frases.

    Os controladores são responsáveis por fazer o intermédio entre o Model e as Views baseado nos dados recebidos por ele após ser encaminhado por uma 
    determinada rota.

    As regras de negócio definidas no Model são executadas, conforme necessidade, e o controlador é responsável por interpretar os resutados das chamadas das funções do
    modelo e apresentar as páginas corretas ao usuário.

    Neste modelo de arquivo cria-se um objeto {} contendo funções como propriedades. Esse objeto é então exportado e essas funcões podem ser acessadas diretamente a partir do objeto


*/

var fraseModel = require('../models/fraseModel') // Importando o modelo correspondente para frases

// Objeto contedo todos os controladores
var frasesController = {

    // Controlador para exibir a pagina inicial das frases, contendo a interface. Neste caso queremos obter
    // todas as frases para disponibiliza-las em uma lista
    // GET /frases/
    fraseHome(req, res) {
        // Chama a funcão getFrases do modelo, responsável por obter todas as frases e retornar em uma lista
        fraseModel.getFrases((err, data) => {
            try {
                if (err) {
                    console.log(err)
                }
                // caso tenhamos dados de frases passamos esses dados para a pagina frasesView
                else if (data) {
                    res.render('frasesView', { data: data })
                }
                // Caso não tenha nenhuma frase manda um objeto vazio
                else {
                    res.render('frasesView', { data: {} })
                }
            } catch (error) {
                console.log(error)
            }
        })
    },

    // Controlador para adicionar uma frase à lista de frases, deve chamar a função do modelo de frases
    // responsável pela inserção de novas frases
    // POST /frases/add
    addFrase(req, res) {
        try {

            // Podemos obter os dados enviados pelo POST acessando a propriedade body do nosso request (req)
            // e acessando o campo frase (setado no action="POST" do frasesView.ejs) do formulário enviado
            let frase = req.body.frase;

            // Chama a função addFrase passando a frase obtida do POST request acima
            fraseModel.addFrase(frase, (err, data) => {
                if (err) {
                    console.log('error occured', err)
                }
                else {
                    // Caso não ocorra erro redireciona para /frases/
                    // fazendo com que o navegador efetue um GET para /frases/, carregando novamente toda a lista e atualizando a pagina
                    res.redirect('/frases/')
                }
            })
        }
        catch (error) {
            console.log('error', error)
        }
    }

}

module.exports = frasesController;  