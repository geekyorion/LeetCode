/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    low -= low % 2;
    high += high % 2;
    return (high - low) / 2;
};