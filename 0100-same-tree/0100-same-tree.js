/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isNull = value => value === null;

const isSameTree = (p, q) => {
    const traverseNodes = (node1, node2) => {
        if (node1 === null && node2 === null) return true;
        if (node1 === null || node2 === null) return false;
        
        return ((node1?.val === node2?.val)
            && traverseNodes(node1.left, node2.left)
            && traverseNodes(node1.right, node2.right)
        );
    };
    
    return traverseNodes(p, q);
};