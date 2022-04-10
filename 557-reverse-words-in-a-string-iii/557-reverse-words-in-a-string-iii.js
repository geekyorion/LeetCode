/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(word => [...word].reverse().join('')).join(' ');
    
    let ans = '', word = '';
    for (let char of s) {
        if (char === ' ') {
            ans = ans + word + char;
            word = '';
        } else {
            word = char + word;
        }
    }
    ans += word
    return ans;
};