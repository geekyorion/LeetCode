/**
 * @param {string} s
 * @return {boolean}
 */

const getASCII = char => char?.charCodeAt(0);

const isAlphaNumeric = char => {
    const code = getASCII(char);
    return (code >= 97 && code <= 122) || (code >= 65 && code <= 90) || (code >= 48 && code <= 57);
};

const getCaseInsensitiveCode = char => {
    const code = getASCII(char);
    if (code >= 97) return code - 32;
    return code;
};

const isPalindrome = s => {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (!isAlphaNumeric(s[left])) { left++; continue; }
        if (!isAlphaNumeric(s[right])) { right--; continue; }
        
        if (getCaseInsensitiveCode(s[left]) !== getCaseInsensitiveCode(s[right])) return false;
        left++;
        right--;
    }

    return true;
};