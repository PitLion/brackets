module.exports = function check(str, bracketsConfig) {
  let openBrackets = bracketsConfig.map(item => item[0]);

  let bracketsPair = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
      bracketsPair[bracketsConfig[i][1]] = openBrackets[i];
  }

  function isBracketsOk(str) {
      let stack = [];

      for (let j = 0; j < str.length; j++) {
          let currentSymbol = str[j];
          let topElement = stack[stack.length - 1];


          if (openBrackets.includes(currentSymbol)) {
              if (bracketsPair[currentSymbol] === currentSymbol && bracketsPair[currentSymbol] === topElement && stack.includes(currentSymbol)) {
                  stack.pop();
                  continue;
              }

              stack.push(currentSymbol);
          } else {
              if (stack.length === 0) {
                  return false;
              }

              if (bracketsPair[currentSymbol] === topElement) {
                  stack.pop();
              } else {
                  return false;
              }
          }
      }
      return stack.length === 0;
  }

  return isBracketsOk(str);
}
