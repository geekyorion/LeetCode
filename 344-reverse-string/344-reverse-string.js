/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // s.reverse();
    
    let n = s.length + 1;
    while(n--) {
        s.splice(s.length - n, 0, s.pop());
    }
};