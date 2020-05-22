const greeting = require('../src/greeting');

// A função deve receber uma string ${param} e retornar a mensagem 'Hello ${param}!'
// Se nenhum parâmetro for passado um erro deve ser lançado
// A mensagem do erro deve ser 'You must send something to greet!'

describe('#greeting', () => {
  it('expect returned message should be a Hello param', () => {
    expect(greeting('everyone')).toBe('Hello everyone!');
  });
  it('if no params has been passed, a error message should be returned', () => {
    expect(greeting).toThrow('You must send something to greet!');
  });
});
