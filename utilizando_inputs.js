const readline = require('readline').createInterface({
    input: process.stdin,output: process.stdout});  
const { error_message, sucess_message } = require('./import/message');
const idadeMinima = 18;

readline.question('Digite seu nome: ', (nomeClient) => {
    let nomeCliente = nomeClient;
    readline.question('Digite sua idade: ', (idadeClient) => {
        let idadeCliente = idadeClient;
        if (idadeCliente >= idadeMinima) {
            sucess_message(`O cliente ${nomeCliente}\n`+
            `possui idade suficiente para ingerir`+
            ` bebidas alcoólicas.`);
        } else {
            error_message(`O cliente ${nomeCliente} que possui`+
            ` ${idadeCliente} anos\nnão atingiu a idade mínima`+
            ` para ingerir bebidas alcoólicas,\njá que a idade`+
            ` mínima é ${idadeMinima}.`);
        }
        readline.close();
    });
});
