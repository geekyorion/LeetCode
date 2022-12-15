/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
    let majorityItem = nums[0];
    let counter = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (counter === 0) {
            majorityItem = nums[i];
            counter = 1;
        } else {
            counter += (nums[i] === majorityItem ? 1 : -1);
        }
    }
    return majorityItem;
};

/*
Logic: since majority item is repeated more than "num.length / 2" times
we can apply simple counter logic which will ultimately won't allow count to go to zero
cause of the it's majority item's occurance
*/
