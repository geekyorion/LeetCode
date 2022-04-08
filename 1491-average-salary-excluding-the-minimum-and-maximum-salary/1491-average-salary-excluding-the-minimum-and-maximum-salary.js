/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min = 1e6 + 1, max = sum = 0;
    for (let amount of salary) {
        sum += amount;
        if (amount > max) max = amount;
        if (amount < min) min = amount;
    }
    return ((sum - (min + max)) / (salary.length - 2)).toFixed(5);
};