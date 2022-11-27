/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = num => {
    if (num <= 1) return num;

    // using newton's approach
    let mid = num / 2;
    while ((mid * mid - num) >= 0.1) {
        mid = mid - ((mid * mid - num) / (2 * mid));
    }
    return ~~mid;
    
    
    // using odd numbers
    let ans = 0;
    for (let i = 1; ;i += 2) {
        num = num - i;
        if (num < 0) {
            break;
        }
        ans++;
    }
    return ans;
};