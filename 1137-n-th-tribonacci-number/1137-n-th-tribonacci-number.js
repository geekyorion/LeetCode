/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n == 0) return 0;
    if (n < 3) return 1;

    let first = 0;
    let second = 1;
    let third = 1;
    
    for (let i = 3; i <= n; i++) {
        let temp = first;
        first = second;
        second = third;
        third = first + second + temp;
        
        // [first, second, third] = [second, third, first + second + third];
    }
    return third;
};