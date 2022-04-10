/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // s.reverse();
    
    let n = s.length - 1, i = -1;
    while(++i < ~~((n + 1) / 2)) {
        [s[i], s[n - i]] = [s[n - i], s[i]];
    }
};
