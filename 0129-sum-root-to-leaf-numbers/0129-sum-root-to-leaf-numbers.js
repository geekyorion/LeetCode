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
const sumNumbers = root => {    
    let answer = 0;
    const travel = (currNode, currNumber) => {
        if (!currNode.left && !currNode.right) {
            answer += currNumber
            return;
        }
        
        if (currNode.left) {
            travel(currNode.left, currNumber * 10 + currNode.left.val)
        }
        
        if (currNode.right) {
            travel(currNode.right, currNumber * 10 + currNode.right.val)
        }
    };
    travel(root, root.val);
    
    return answer;
};