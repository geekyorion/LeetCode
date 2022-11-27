/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = str => {
    if (str.length % 2) return false;

    const brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    
    const stack = [];
    
    for (let char of str) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            const opening = stack.pop();
            if (opening !== brackets[char]) return false;
        }
    }
    
    return stack.length === 0;
};
