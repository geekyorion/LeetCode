/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
    let preHead = new ListNode();
    let head = preHead;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            preHead.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            preHead.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        preHead = preHead.next;
    }
    
    let copyThis = list1 ? list1 : list2;
    
    while (copyThis) {
        preHead.next = new ListNode(copyThis.val)
        preHead = preHead.next;
        copyThis = copyThis.next;
    }
    
    return head.next;
};