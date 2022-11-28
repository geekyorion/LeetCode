/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = head => {
    if (!head || !head.next) return head;

    let currNode = head;
    let nextNode = currNode.next;
    while (nextNode) {
        if (currNode.val === nextNode.val) {
            currNode.next = nextNode.next;
        } else {
            currNode = currNode.next;
        }
        nextNode = nextNode.next;
    }
    return head;
};