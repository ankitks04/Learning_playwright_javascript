
function countVowelsAndConsonants(str) {
    if (typeof str !== 'string') {
        return { vowels: 0, consonants: 0 };
    }

    const vowelsMatch = str.match(/[aeiou]/gi);
    
    const consonantsMatch = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);

    return {
        vowels: vowelsMatch ? vowelsMatch.length : 0,
        consonants: consonantsMatch ? consonantsMatch.length : 0
    };
}

// Example
const testcount = "Akshay pathania";
const result = countVowelsAndConsonants(testcount);
console.log(`String: "${testcount}"`);
console.log(result);
