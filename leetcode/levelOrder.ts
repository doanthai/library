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

function levelOrder(root: TreeNode | null, level = 0, path = []): number[][] {
    if (root == null) return path;
    if (path[level] == undefined) path[level] =[root.val];
    else path[level].push(root.val);
    levelOrder(root.left, level + 1, path);
    levelOrder(root.right, level + 1, path);
    return path;
};
