/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let first = cost[0], second = cost[1];
    const n = cost.length;

    if (n === 1) return first;
    if (n === 2) return first < second ? first : second;
    
    for (let i = 2; i < n; i++) {
        let temp = first;
        first = second;
        second = Math.min(temp + cost[i], first + cost[i]);
    }
    
    return first < second ? first : second;
};