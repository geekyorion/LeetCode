/**
 * @param {string} s
 * @return {number}
 */
const isAlpha = char => {
    const code = char.charCodeAt();
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

const lengthOfLastWord = s => {
    // using for loop
    let firstChar;
    for (let i = s.length - 1; i >= 0; i--) {
        if (!firstChar && isAlpha(s[i])) {
            firstChar = i;
            continue;
        }
        if (firstChar && s[i] === ' ') {
            return firstChar - i;
        }
    }
    return firstChar !== undefined ? firstChar + 1 : 0;
    
    // using regex
    return s.replace(/^(.*\s+)?([a-z]+)(\s+)?$/gi, (...args) => args[2]).length;
};
