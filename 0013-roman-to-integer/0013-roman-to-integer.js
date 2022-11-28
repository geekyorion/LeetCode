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
    
    let same = false;
    let diff = false;
    let char = s[0];
    let skip = false;
    let add = false;
    let ans = 0;
    let currValue = romans[char];
    
    for (let i = 1; i < s.length; i++) {
        if (skip) {
            skip = false;
            continue;
        }

        const currChar = s[i];
        if (currChar === char) {
            same = true;
        } else {
            if (romans[char] < romans[currChar]) {
                diff = true;
            } else {
                add = true;
            }
        }

        if (same) {
            currValue += romans[currChar];
            char = currChar;
            same = false;
        } else if (diff) {
            ans += (romans[currChar] - romans[char]);
            char = s[i + 1];
            currValue = romans[char] || 0;
            skip = true;
            diff = false;
        } else if (add) {
            ans += currValue;
            char = currChar;
            currValue = romans[char];
            add = false;
        }
    }

    return ans + currValue;
};
