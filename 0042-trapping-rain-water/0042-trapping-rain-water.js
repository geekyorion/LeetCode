/**
 * @param {number[]} height
 * @return {number}
 */
const trap = height => {
    const length = height.length;
    let leftPointer = 0, rightPointer = length - 1, leftMax = height[leftPointer], rightMax = height[rightPointer], totalWater = 0;
    
    while (leftPointer < rightPointer) {
        if (leftMax <= rightMax) { // Water level determined by the left side
            totalWater += leftMax - height[leftPointer]; // Add water level difference to total water
            leftPointer++; // Move left pointer to the right
            leftMax = Math.max(leftMax, height[leftPointer]); // Update left maximum if necessary
        } else { // Water level determined by the right side
            totalWater += rightMax - height[rightPointer]; // Add water level difference to total water
            rightPointer--; // Move right pointer to the left
            rightMax = Math.max(rightMax, height[rightPointer]); // Update right maximum if necessary
        }
    }
    
    return totalWater;
};