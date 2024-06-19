//https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3574/
function sortedSquares(nums: number[]): number[] {
    let rs = [];
    let l = 0;
    let r = nums.length - 1;
    let i = r;
    while(l <= r) {
        if (Math.abs(nums[r]) > Math.abs(nums[l])) {
            rs[i] = nums[r] * nums[r];
            r--;
        } else {
            rs[i] = nums[l] * nums[l];
            l++;
        }
        i--;
    }
    return rs;
};
