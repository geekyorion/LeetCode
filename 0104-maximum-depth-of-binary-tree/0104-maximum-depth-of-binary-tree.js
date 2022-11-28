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
 * @return {number}
 */
const maxDepth = root => {
    let ans = 0;

    const checkDepth = (root, currentDepth) => {
        if (root === null) return;
        ans = Math.max(currentDepth, ans);
        checkDepth(root.left, currentDepth + 1);
        checkDepth(root.right, currentDepth + 1);
    };
    checkDepth(root, 1);
    
    return ans;
};
