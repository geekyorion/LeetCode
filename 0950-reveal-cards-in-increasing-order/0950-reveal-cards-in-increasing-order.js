/**
 * @param {number[]} deck
 * @return {number[]}
 */
const deckRevealedIncreasing = deck => {
    const sorted_deck = deck.sort((a, b) => a - b);
    const n = sorted_deck.length;
    const answer = new Array(n);
    
    let filled = 0;
    let current = 0;
    let skip = true;

    while (filled < n) {
        if (skip && !answer[current]) {
            answer[current] = sorted_deck[filled++];
            skip = false;
        }
        if (!skip && !answer[current]) {
            skip = true;
        }
        current = (current + 1) % n;
    }
    return answer;
};
