/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
    if (!s) return 0;

    const romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    if (s in romans) return romans[s];

    let char = romans[s[0]];
    let ans = 0;
    
    for (let i = 1; i < s.length; i++) {
        const currChar = romans[s[i]];
        if (char > currChar) {
            ans += char;
            char = currChar;
        } else if (char < currChar) {
            ans += (currChar - char);
            char = romans[s[i + 1]] || 0;
            i++;
        } else {
            ans += char;
        }
    }

    return ans + char;
};