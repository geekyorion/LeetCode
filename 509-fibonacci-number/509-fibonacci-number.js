/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // this should be faster than the for loop and memoization
    let phi = ((1 + (5) ** (1 / 2)) / 2) ** n;
    let phi_i = ((1 - (5) ** (1 / 2)) / 2) ** n;
    return ~~((phi - phi_i) / (5) ** (1 / 2));
};