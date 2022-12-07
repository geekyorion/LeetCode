/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = rowIndex => {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1, 1];

    const ans = [1];
    let j = 1;
    for (; j < ~~((rowIndex + 2) / 2); j++) {
        const last = ans[j - 1];
        ans.push((last * (rowIndex - (j - 1)) / j));
    }
    for (; j <= rowIndex; j++) {
        ans.push(ans[rowIndex - j]);
    }
    return ans;
};
