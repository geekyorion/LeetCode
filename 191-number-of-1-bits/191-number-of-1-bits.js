/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const str = n.toString(2);
    let count = 0;
    for (let char of str) {
        if (char === '1') {
            count++;
        }
    }
    return count;
    
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