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
 * @return {number[]}
 */
const inorderTraversal = root => {
    const ans = [];
    
    const traverseTree = node => {
        node?.left ? traverseTree(node.left) : null;
        if (node) {
            ans.push(node.val);
        }
        node?.right ? traverseTree(node.right) : null;
    }
    
    traverseTree(root);
    
    return ans;
};