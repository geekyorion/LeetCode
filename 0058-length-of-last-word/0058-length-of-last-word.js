/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = s => {
    return s.replace(/^(.*\s+)?([a-z]+)(\s+)?$/gi, (...args) => args[2]).length;
};
