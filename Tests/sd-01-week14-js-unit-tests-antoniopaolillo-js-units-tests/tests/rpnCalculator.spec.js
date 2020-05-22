const rpnCalculator = require('../src/rpnCalculator');

// A função deve receber uma string representando a expressão a ser avaliada
// e retornar o resultado da expressão
// A função deve suportar as operadores: +, -, * e /
// Qualquer outro operador deve lançar um erro

// ps: utilize os exemplos da documentação (README.md) para contrinuir com os testes

describe('#rpnCalculator', () => {
  it('expect result of "3 4 +" should be 7', () => {
    expect(rpnCalculator('3 4 +')).toBe(7);
  });
  it('expect result of "3 4 - 5 +" should be 4', () => {
    expect(rpnCalculator('3 4 - 5 +')).toBe(4);
  });
  it('expect result of "3 4 5 * -" should be -17', () => {
    expect(rpnCalculator('3 4 5 * -')).toBe(-17);
  });
  it('expect result of "3 4 - 5 *" should be -5', () => {
    expect(rpnCalculator('3 4 - 5 *')).toBe(-5);
  });
  it('expect result of "15 7 1 1 + - / 3 * 2 1 1 + + -" should be 5', () => {
    expect(rpnCalculator('15 7 1 1 + - / 3 * 2 1 1 + + -')).toBe(5);
  });
  it('if another operator has been passed, a message error should be returned', () => {
    expect(() => rpnCalculator('3 4 .')).toThrow('The function do not support this operator or it do not exist');
    expect(() => rpnCalculator('1 2 3 . ^')).toThrow('The function do not support this operator or it do not exist');
  });
});
