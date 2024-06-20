// https://leetcode.com/submissions/detail/1294173544/?from=explore&item_id=930
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function postorderTraversal(root: TreeNode | null): number[] {
    let path: number[] = [];
    
    function traversal(root: TreeNode | null) {
        if (root == null) return;
        traversal(root.left);
        traversal(root.right);
        path.push(root.val);
    }
    
    traversal(root);
    return path;
};
