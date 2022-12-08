/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = n => {
    const log = Math.log2(n);
    return log === ~~log;
};
