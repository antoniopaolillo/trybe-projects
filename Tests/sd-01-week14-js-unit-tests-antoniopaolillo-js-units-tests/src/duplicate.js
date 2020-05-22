/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(...params) {
  const findDuplicates = new Set(params);
  if ([...findDuplicates].length === params.length) {
    return false;
  }
  return true;
}

module.exports = duplicate;
