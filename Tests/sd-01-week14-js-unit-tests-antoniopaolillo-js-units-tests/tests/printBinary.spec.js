const printBinary = require('../src/printBinary');

// A função recebe um inteiro e retorna uma lista contendo todos os números em formato binário
// que podem ser representados com a quantidade de dígitos recebidos por parâmetro
// Se a função receber algum valor não numérico um array vazio deve ser retornado
// Se a função receber o valor 0 (zero) um array vazio deve ser retornado

describe('#printBinary', () => {
  it('should print binary numbers until 1', () => {
    expect(printBinary(1)).toStrictEqual(['0', '1']);
  });

  it('should print binary numbers until 2', () => {
    expect(printBinary(2)).toStrictEqual(['00', '01', '10', '11']);
  });

  it('should print a empty array until no numeric param', () => {
    expect(printBinary('something')).toStrictEqual([]);
  });

  it('should print a empty array until 0', () => {
    expect(printBinary(0)).toStrictEqual([]);
  });
});

