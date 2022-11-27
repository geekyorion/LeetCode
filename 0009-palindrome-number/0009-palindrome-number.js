/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = num => {
    if (num < 0) return false;
    if (num < 10) return true;
    
    let n = ~~(Math.log10(num));
    while (num && n) {
        const left = (10 ** (n--));
        n--;
        if (~~(num / left) !== num % 10) return false;
        num = num % left;
        num = ~~(num / 10)
    }
    return true;
};