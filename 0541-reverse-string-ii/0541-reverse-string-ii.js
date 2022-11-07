/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
    let ans = '';
    
    for (let i = 0; i < s.length; i += 2 * k) {
        for (let j = i + k - 1; j > i - 1; j--) {
            ans += (s[j] ?? '');
        }
        for (let j = i + k; j < i + 2 * k; j++) {
            ans += (s[j] ?? '');
        }
    }
    
    return ans;
};