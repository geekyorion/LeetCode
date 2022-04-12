/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const traverse = (node, index = 0) => {
        if (node.next) {
            traverse(node.next, index + 1);
            n--;
        }
        if (n == 0) {
            node.next = node.next ? node.next.next : null;
        } else if (index === 0 && n === 1) {
            // head should point to next node
            head = head.next;
        }
    }
    traverse(head);
    return head;
};
