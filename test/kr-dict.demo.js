import krDictLookUp from "../dist/kr-dict.js";

function isObjectEmpty (obj) {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}

console.log(krDictLookUp('감기'));
console.log(isObjectEmpty(krDictLookUp('non-exist')));