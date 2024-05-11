/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    const maxHeap = new MaxPriorityQueue();

    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            maxHeap.enqueue([arr[i], arr[j]], arr[i]/arr[j]);
            if(maxHeap.size() > k) maxHeap.dequeue();
        }
    }

    return maxHeap.dequeue().element;
};