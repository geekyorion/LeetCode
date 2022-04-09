/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // parse number to the binary number
    return eval(n.toString(2).split('').join('+'));
    
    // using logical AND
    let i = 0, ans = 0;
    while (n >= Math.pow(2, i)) {
        if (n & Math.pow(2, i++)) {
            ans++;
        }
    }
    return ans;
};