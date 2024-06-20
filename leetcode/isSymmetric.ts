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

function isSymmetric(root: TreeNode | null): boolean {
    return isSame(root.left, root.right);
    
    function isSame(l, r) {
        if (!l && !r) return true;
        if (!l || !r) return false;
        if (l.val != r.val) return false;
        return isSame(l?.left, r?.right) && isSame(l?.right, r?.left);
    }
};
