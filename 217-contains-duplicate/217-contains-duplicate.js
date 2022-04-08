/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hash = {};
    for (let num of nums) {
        if (num in hash) return true;
        hash[num] = 0;
    }
    return false;
};