import jpDict from "../dist/jp-dict.js";

function isResultEmpty (result) {
  return result.length === 0;
}

console.log(jpDict.lookUp('赤い'));
console.log(isResultEmpty(jpDict.lookUp('non-exist')));

console.log(jpDict.reverseLookUp('blue'));
console.log(isResultEmpty(jpDict.reverseLookUp('non-exist')));