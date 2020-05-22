/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  const filteredNumbers = params.filter(num => typeof num === 'number');
  if (filteredNumbers.length === params.length) {
    let total = 0;
    for (let index = 0; index < filteredNumbers.length; index += 1) {
      total += filteredNumbers[index];
    }
    return total / filteredNumbers.length;
  }
  return undefined;
}

module.exports = average;
