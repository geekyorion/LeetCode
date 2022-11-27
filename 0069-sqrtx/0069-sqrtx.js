/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = num => {
    if (num <= 1) return num;

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