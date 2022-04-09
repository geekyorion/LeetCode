/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let i = 0, ans = 0;
    while (n >= Math.pow(2, i)) {
        if (n & Math.pow(2, i++)) {
            ans++;
        }
    }
    return ans;
};