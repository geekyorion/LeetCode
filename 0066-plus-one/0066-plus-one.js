/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
    // using BigInt
    return (
        BigInt(digits.join('')) + BigInt(1)
    ).toString().split('').map(i => +i);
};
