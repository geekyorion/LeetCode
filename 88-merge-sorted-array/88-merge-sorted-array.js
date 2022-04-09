/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0, changes = 0;
    nums1.splice(m, n);
    while (nums2.length && i < m + changes) {
        if (nums1[i] > nums2[0]) {
            nums1.splice(i, 0, nums2.shift());
            changes += 1;
        }
        i++;
    }
    while(nums2.length) {
        nums1.push(nums2.shift());
    }
};