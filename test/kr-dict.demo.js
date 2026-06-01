import krDict from "../dist/kr-dict.js";

function isResultEmpty (result) {
  return result.length === 0;
}

console.log(krDict.lookUp('감기'));
console.log(isResultEmpty(krDict.lookUp('non-exist')));