/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = n => {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];

    const ans = [0, 1];
    let range = 2;
    let tempRange = 2;
    let currentNum = 1;

    for (let i = 2; i <= n; i++) {
        ans.push(ans[i - range] + 1);
        tempRange--;

        if (tempRange === 0) {
            range *= 2;
            tempRange = range;
        }
    }

    return ans;
};