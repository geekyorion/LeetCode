/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = columnTitle => {
    const n = columnTitle.length;
    let ans = 0;
    for (let i = n - 1; i >= 0; i--) {
        ans += (columnTitle[i].charCodeAt(0) % 65 + 1) * 26 ** (n - 1 - i);
    }
    return ans;
};