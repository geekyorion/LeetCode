/**
 * @param {string} n
 * @return {string}
 */
const counter = numString => {
    const _counter = [];
    let currentNumChar = "";
    let frequency = 1;
    for (let numChar of numString) {
        if (numChar === currentNumChar) {
            _counter[_counter.length - 1][0]++;
        } else {
            currentNumChar = numChar;
            _counter.push([1, numChar]);
        }
    }
    let ans = "";
    for (let counterArr of _counter) {
        ans += counterArr[0] + counterArr[1];
    }
    return ans;
}

/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = n => {
    let ans = "1";
    
    for (let i = 2; i <= n; i++) {
        ans = counter(`${ans}`);
    }
    
    return ans;
};
