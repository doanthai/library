// https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3228/
function heightChecker(heights: number[]): number {
    let h = [...heights].sort((a,b) => a - b);
    return heights.filter((v, k) => heights[k] !== h[k]).length;
};
