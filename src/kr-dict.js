const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

let dictData;

if (isNode) {
    const module = await import('./dict.json', { with: { type: 'json' } });
    dictData = module.default;
}
else {
    const jsonUrl = new URL('./dict.json', import.meta.url).href;
    const response = await fetch(jsonUrl);
    dictData = await response.json();
}

function lookUp (search) {
    let result = [];

    if (typeof search !== 'string') {
        return result;
    }
    
    for (const lexicon of dictData) {
        if (lexicon['word'] === search) {
            result.push(lexicon);
        }
    }

    return result;
}

const krDict = Object.freeze({
    lookUp
});

export default krDict;
export { lookUp };