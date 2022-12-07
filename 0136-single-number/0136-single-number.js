/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
    let ans = nums[0];
    for (let i = 1; i < nums.length; i++) {
        ans = ans ^ nums[i];
    }
    return ans;
};
