/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // const ans = [];
    // while (nums.length) {
    //     if (Math.abs(nums[nums.length - 1]) > Math.abs(nums[0])) {
    //         ans.unshift(nums.pop() ** 2)
    //     } else {
    //         ans.unshift(nums.shift() ** 2)
    //     }
    // }
    // return ans;
    
    return nums.map(num => num * num).sort((num1, num2) => num1 - num2);
};