/*
  A função rpnCalculator recebe uma string contendo a expressão matemática a ser avaliada
  e retorna o valor da avaliação da expressão

  referência: https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */

const if1 = (elm1, elm2, stack) => {
  if (elm1 === elm2) {
    const a = parseInt(stack.splice(-1)[0], 10);
    const b = parseInt(stack.splice(-1)[0], 10);
    stack.push(a + b);
  }
};
const if2 = (elm1, elm2, stack) => {
  if (elm1 === elm2) {
    const a = parseInt(stack.splice(-1)[0], 10);
    const b = parseInt(stack.splice(-1)[0], 10);
    stack.push(b - a);
  }
};
const if3 = (elm1, elm2, stack) => {
  if (elm1 === elm2) {
    const a = parseInt(stack.splice(-1)[0], 10);
    const b = parseInt(stack.splice(-1)[0], 10);
    stack.push(a * b);
  }
};
const if4 = (elm1, elm2, stack) => {
  if (elm1 === elm2) {
    const a = parseInt(stack.splice(-1)[0], 10);
    const b = parseInt(stack.splice(-1)[0], 10);
    stack.push(b / a);
  }
};
function rpnCalculator(expression) {
  const operands = ['+', '-', '*', '/'];
  const stack = [];
  let i = 0;
  const arrayStrings = expression.split(' ').filter(element => element !== ' ');
  stack.push(arrayStrings[i]);
  i += 1;
  arrayStrings.forEach((element) => {
    if (isNaN(Number(element)) && !operands.includes(element)) throw new Error('The function do not support this operator or it do not exist');
  });
  while (i <= arrayStrings.length) {
    const item = arrayStrings[i];
    const index = operands.indexOf(item);
    if (index < 0) {
      stack.push(arrayStrings[i]);
    } else {
      if1(index, 0, stack);
      if2(index, 1, stack);
      if3(index, 2, stack);
      if4(index, 3, stack);
    }
    i += 1;
  }
  return parseInt(stack[0], 10);
}
module.exports = rpnCalculator;
