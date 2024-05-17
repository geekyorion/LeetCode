/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const evaluateTree = root => {
    // edge case
    if (!root.left) return root.val === 1;

    const solveThis = (node) => {
        if (node.left.left) {
            solveThis(node.left);
        }
        if (node.right.left) {
            solveThis(node.right)
        }
        
        if (node.val === 2) {
            node.val = node.left.val || node.right.val;
        } else if (node.val === 3) {
            node.val = node.left.val && node.right.val;
        }
    };
    solveThis(root);
    return root.val;    
};