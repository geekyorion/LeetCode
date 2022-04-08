/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const ans = [];
    while (nums.length) {
        if (Math.abs(nums[nums.length - 1]) > Math.abs(nums[0])) {
            ans.unshift(nums.pop() ** 2)
        } else {
            ans.unshift(nums.shift() ** 2)
        }
    }
    return ans;
};