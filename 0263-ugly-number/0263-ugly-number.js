/**
 * @param {number} n
 * @return {boolean}
 */
const isUgly = n => {
    if (n < 1) return false;

    const checkWith = [2, 3, 5];
    while (n > 1) {
        let flag = false;
        for (let num of checkWith) {
            if (n % num === 0) {
                flag = true;
                n = n / num;
                break;
            }
        }
        if (!flag) return false;
    }
    return true
};