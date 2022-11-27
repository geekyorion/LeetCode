/**
 * @param {string[]} strs
 * @return {string}
 */

const getChar = (str, index) => {
    return str[index];
}

const longestCommonPrefix = strs => {
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
    
    let ans = '';
    let currIndex = 0;
    let currChar = '';

    while (true) {
        for(let i = 0; i < strs.length; i++) {
            if (strs[i].length === 0 || currIndex >= strs[i].length) return ans;

            if (i === 0) {
                currChar = strs[i][currIndex];
                continue;
            }

            if (currChar !== strs[i][currIndex]) {
                return ans;
            }
            
            if (i === strs.length - 1) {
                if (currChar === strs[i][currIndex++]) {
                    ans += currChar;
                } else {
                    return ans;
                }
            }
        }
    }
};