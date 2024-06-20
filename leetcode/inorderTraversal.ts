// https://leetcode.com/submissions/detail/1294145207/?from=explore&item_id=929
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

function inorderTraversal(root: TreeNode | null, path = []): number[] {
    if (root == null) return path;
    inorderTraversal(root.left, path);
    path.push(root.val);
    inorderTraversal(root.right, path);
    return path;
};
