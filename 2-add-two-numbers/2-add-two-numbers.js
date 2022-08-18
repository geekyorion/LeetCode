/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const getNode = (val = 0, next = null) => {
    return new ListNode(val, next);
};

const addTwoNumbers = (l1, l2) => {
    const answer = getNode();
    let currNode = answer;

    while (l1 && l2) {
        const sum = currNode.val + l1.val + l2.val;
        currNode.val = sum % 10;
        const carryForward = ~~(sum / 10);

        // edge condition
        if (!(l1.next === null && l2.next === null && carryForward === 0)) {
            currNode.next = getNode(carryForward);
            currNode = currNode.next;
        }
        
        l1 = l1.next;
        l2 = l2.next;
    }

    const copyList = (list) => {
        while (list) {
            const sum = currNode.val + list.val;
            currNode.val = sum % 10;
            const carryForward = ~~(sum / 10);

            if (list.next !== null || carryForward !== 0) {
                currNode.next = getNode(carryForward);
            }

            list = list.next;
            currNode = currNode.next;
        }
    };

    copyList(l1);
    copyList(l2);

    return answer;
};
