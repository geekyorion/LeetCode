/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    // const digitArray = [...n.toString()];
    // return eval(digitArray.join('*')) - eval(digitArray.join('+'));
    
    let sum = 0, multiplication = 1;
    while (n) {
        let rem = n % 10;
        sum += rem;
        multiplication *= rem;
        n = ~~(n / 10);
    }
    
    return multiplication - sum;
};