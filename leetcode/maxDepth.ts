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

function maxDepth(root: TreeNode | null, depth = 0): number {
    if (root == null) return depth;
    let leftDepth = maxDepth(root.left, depth + 1);
    let rightDepth = maxDepth(root.right, depth + 1);
    return Math.max(leftDepth, rightDepth);
};