const bracketHash = {
    '(': ')',
    '{': '}',
    '[': ']'
};

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = str => {
    if (str.length % 2) return false;
    
    const stack = [];
    
    for (let char of str) {
        if (char in bracketHash) {
            stack.push(bracketHash[char]);
        } else if (stack.pop() !== char) {
            return false;
        }
    }
    
    return stack.length === 0;
};