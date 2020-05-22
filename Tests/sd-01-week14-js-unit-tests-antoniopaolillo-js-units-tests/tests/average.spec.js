const average = require('../src/average');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar a média dos números que receber
// Caso a função receba algum valor não número, o valor undefined deve ser retornado

describe('#average', () => {
  it('expect average of 1 should be 1', () => {
    expect(average(1)).toBe(1);
  });
  it('expect average of 6 and 8 should be 7', () => {
    expect(average(6, 8)).toBe(7);
  });
  it('expect average of 3, 4, 5 should be 4', () => {
    expect(average(3, 4, 5)).toBe(4);
  });
  it('expect average of string should be undefined', () => {
    expect(average(3, 4, 'something')).toBe(undefined);
  });
  it('expect average of string should be undefined', () => {
    expect(average('word', 'something')).toBe(undefined);
  });
});
