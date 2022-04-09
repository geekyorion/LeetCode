/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        if(obj[target - nums[i]] >= 0) {
            return [obj[target - nums[i]], i];
        }
        obj[nums[i]] = i;
    }
};

// trying with brute force
    // for(let i = 0; i < nums.length; i++) {
    //     for(let j = i+1; j < nums.length; j++) {
    //         if(nums[i] + nums[j] === target){
    //             return [i, j];
    //         }
    //     }
    // }

// with map
//     const map = new Map();
//     for(let i = 0; i < nums.length; i++) {
//         const diff = target - nums[i];
//         if(map.has(diff)) {
//             return [map.get(diff), i]
//         }
//         map.set(nums[i], i);
//     }