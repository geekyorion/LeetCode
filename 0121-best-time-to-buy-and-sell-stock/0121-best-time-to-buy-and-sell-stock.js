/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
    let min = prices[0];
    let currentProfit = 0;
    let maximumProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) min = prices[i];
        currentProfit = prices[i] - min;
        if (currentProfit > maximumProfit) maximumProfit = currentProfit;
    }
    
    return maximumProfit;
};