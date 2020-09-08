/*
    - src/models/fraseModel.js

    Arquivo de definição model das frases.

    O model é responsável por obter dados, tratá-los e implementar as regras de negócio, ou seja, como os dados são processados, 
    o que podem ou não ser feito dentro do sistema, quais dados são retornados e assim por diante.


*/

const frases = ["Lógico que existe cobra herbívora, tem cobra que come inseto... - Guguri, Ikida. 2019", "Yuri, O que significa Iron Maiden? Ué, 'feito de aço', não é?- Ikida, Guri. 2020", "sky-fi - Ikida, Guri. 2019"]

// Retorna todas as frases
function getFrases(cb) {
    cb(null, frases)
}

// Adiciona uma frase a lista de frases
function addFrase(novaFrase, cb) {
    frases.push(novaFrase)
    cb(null, frases)
}

module.exports = { getFrases, addFrase }