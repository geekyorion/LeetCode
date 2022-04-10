/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
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