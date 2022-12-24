const sortString = string => {
    let sorted = new Array(26).fill("");
    for (let char of string) {
        sorted[char.charCodeAt(0) - 97] = char;
    }
    let ans = '';
    for (let char of sorted) {
        ans += char;
    }
    return ans;
};

/**
 * @param {string[]} words
 * @return {number}
 */
const similarPairs = words => {
    const hash = {};
    for (let word of words) {
        const sortedString = sortString(word);
        hash[sortedString] = (hash[sortedString] || 0) + 1;
    }
    
    let ans = 0;
    for (let key in hash) {
        const n = hash[key]
        if (n > 1) {
            ans += (n * (n - 1) / 2);
        }
    }
    return ans;
};
