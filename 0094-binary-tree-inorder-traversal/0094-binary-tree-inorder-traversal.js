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
var inorderTraversal = function(root) {
    let result = [];
    
    dps(root);
    return result;
    
    function dps(node){
        if(!node){
            return;
        }
        if(node.left){
            dps(node.left);
        }
        result.push(node.val);
        if(node.right){
            dps(node.right);
        }
        return;
    }
};