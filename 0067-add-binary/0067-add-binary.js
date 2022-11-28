/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    if (a === '0') return b;
    if (b === '0') return a;

    const lenA = a.length;
    const lenB = b.length;
    
    const ans = new Array(Math.max(lenA, lenB) + 1).fill(0);
    const ansLen = ans.length;
    const min = Math.min(lenA, lenB);
    
    let carryForward = false;
    
    for (let i = 1; i <= min; i++) {
        const currSum = +a[lenA - i] + +b[lenB - i] + (carryForward ? 1 : 0);

        carryForward = currSum > 1;
        ans[ansLen - i] = currSum % 2;
    }

    if (lenA !== lenB) {
        const copyThis = lenA > lenB ? a : b;
        for (let i = copyThis.length - min - 1; i >= 0; i--) {
            const currSum = +copyThis[i] + (carryForward ? 1 : 0);

            carryForward = currSum > 1;
            ans[i + 1] = currSum % 2;
        }
    }

    if (carryForward) {
      ans[0] = 1;
    } else {
      delete ans[0];
    }

    return ans.join("");
};
