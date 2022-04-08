/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(start <= end) {
        let middle = ~~((start + end) / 2);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
};