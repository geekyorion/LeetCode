/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let middle;
    while(start <= end) {
        middle = ~~((start + end) / 2);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target){
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return end + 1;
};