/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
    const hash = {};
    
    for (let num of nums1) {
        hash[num] = false;
    }
    
    const ans = [];
    for (let num of nums2) {
        if (num in hash && !hash[num]) {
            ans.push(num);
            hash[num] = true;
        }
    }
    
    return  ans;
};