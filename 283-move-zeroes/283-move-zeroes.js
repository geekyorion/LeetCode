/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let first_pointer = 0;
    let last_pointer = nums.length - 1;
    while (nums[last_pointer] === 0 && last_pointer >= first_pointer) {
        last_pointer--;
    }
    while(first_pointer <= last_pointer) {
        if (nums[first_pointer] === 0) {
            nums.push(...nums.splice(first_pointer, 1));
            last_pointer--;
        } else {
            first_pointer++;
        }
    }
};