import krDict from "../dist/kr-dict.js";

function isObjectEmpty (obj) {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}

console.log(krDict.lookUp('감기'));
console.log(isObjectEmpty(krDict.lookUp('non-exist')));