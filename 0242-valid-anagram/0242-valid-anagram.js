/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    const mapper = {};    
    for (let char of s) {
        mapper[char] = (mapper[char] || 0) + 1;
    }
    
    for (let char of t) {
        if (!mapper[char]) return false;
        if (mapper[char] === 0) return false;
        mapper[char]--;
        if (mapper[char] === 0) delete mapper[char];
    }
    
    return true;
};