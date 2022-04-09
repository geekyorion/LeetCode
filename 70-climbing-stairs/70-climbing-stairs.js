/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let first = 2, second = 3;
    if (n < 4) return n;
    
    for (let i = 4; i <= n; i++) {
        let temp = first;
        first = second;
        second = temp + first;
    }
    return second;
    
//     const memo = { 1: 1, 2: 2, 3: 3, 4: 5 };    
//     const climbAStair = (by, currentSteps) => {
//         if (currentSteps in memo) return memo[currentSteps];
//         memo[currentSteps] = climbAStair(1, currentSteps - 1) + climbAStair(2, currentSteps - 2);
//         return memo[currentSteps];
//     }
    
//     return climbAStair(0, n);
    
};


// 1 => 1
// 2 => 2
// 3 => 3 (2 + 1)
// 4 => 5 (3 + 2)
// 5 => 8 (5 + 3)
// ... it is fib series