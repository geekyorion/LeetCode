/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = { 1: 1, 2: 2, 3: 3 };
    
    const climbAStair = (by, currentSteps) => {
        if (currentSteps in memo) return memo[currentSteps];
        memo[currentSteps] = climbAStair(1, currentSteps - 1) + climbAStair(2, currentSteps - 2);
        return memo[currentSteps];
    }
    
    return climbAStair(0, n);
};