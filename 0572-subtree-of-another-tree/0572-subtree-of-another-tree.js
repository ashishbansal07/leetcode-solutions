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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    
    if(root == null) {
        return false;
    }
    
    const aux = function(node){
        return (!!node && aux(node.left, subRoot)) || (!!node && aux(node.right, subRoot)) || dfs(node, subRoot)
    }
    
  return aux(root);
};

function dfs(node1, node2) {
    if (!node1 && !node2) {
      return true
    }
    if (!node1 || !node2) {
      return false
    }
    if (node1.val !== node2.val) {
      return false
    }
    return dfs(node1.left, node2.left) && dfs(node1.right, node2.right);
}