/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let first_pointer = 0;
    let last_pointer = nums.length - 1;
    
    // ignoring the last zeroes
    while (nums[last_pointer] === 0 && last_pointer >= first_pointer) {
        last_pointer--;
    }
    
    // need not to check where both pointers meets, that is a non zero number
    while(first_pointer < last_pointer) {
        if (nums[first_pointer] === 0) {
            nums.push(...nums.splice(first_pointer, 1));
            last_pointer--;
        } else {
            first_pointer++;
        }
    }
};