/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = columnNumber => {
    let ans = '';
    while (columnNumber) {
        const rem = --columnNumber % 26;
        columnNumber = ~~(columnNumber / 26);
        ans = String.fromCharCode(rem + 65) + ans;
    }
    
    return ans;
};