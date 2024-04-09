/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
const timeRequiredToBuy = (tickets, k) => {
    let time = 0;
    const n = tickets.length;
    const cap = tickets[k];
    for (let i = 0; i < n; i++) {
        if (tickets[i] < cap) {
            time += tickets[i];
        } else {
            time += cap;
            if (i > k) {
                time--;
            }
        }
    }
    return time;
};
