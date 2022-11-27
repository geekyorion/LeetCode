/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === val) {
            continue;
        }
        nums[i++] = nums[j];
    }
    return i;
};