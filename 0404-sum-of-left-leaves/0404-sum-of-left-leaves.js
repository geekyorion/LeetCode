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
const sumOfLeftLeaves = root => {
    let answer = 0;
    const traverse = (node, shouldSum) => {
        if (!node.left && !node.right && shouldSum) {
            answer += node.val;            
        }
        if (node.left) traverse(node.left, true);
        if (node.right) traverse(node.right, false);
    }
    traverse(root, false);
    return answer;
};
