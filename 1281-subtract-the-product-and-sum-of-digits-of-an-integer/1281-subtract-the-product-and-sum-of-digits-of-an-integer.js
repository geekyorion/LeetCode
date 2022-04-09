/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const digitArray = [...n.toString()];
    return eval(digitArray.join('*')) - eval(digitArray.join('+'))
};