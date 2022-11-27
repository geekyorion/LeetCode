/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
    // using loop
    const n = digits.length;
    if (digits[n - 1] < 9) {
        digits[n - 1] += 1;
        return digits;
    } else {
        digits[n - 1] = 0;
    }

    let carryForward = true;
    for (let i = n - 2; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    
    if (carryForward) {
        digits.unshift(1);
    }
    return digits;
    
    // using BigInt
    return (
        BigInt(digits.join('')) + BigInt(1)
    ).toString().split('').map(i => +i);
};
