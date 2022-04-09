/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // we can use Hash table to do this but using two pointers as mentioned in hash tags
    let first_pointer = 0;
    let last_pointer = numbers.length - 1;
    
    while(first_pointer != last_pointer) {
        const sum = numbers[first_pointer] + numbers[last_pointer];
        if (sum === target) {
            return [first_pointer + 1, last_pointer + 1];
        } else if (sum < target) {
            first_pointer++;
        } else {
            last_pointer--;
        }
    }
};