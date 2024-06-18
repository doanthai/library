//https://www.hackerrank.com/challenges/one-week-preparation-kit-diagonal-difference/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two
function diagonalDifference(arr: number[][]): number {
    // Write your code here
    let r = arr.length - 1;
    let diff = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == r) continue;
            if (j == i) diff += arr[i][j];
            if (j == r) diff -= arr[i][j];
        }
        r--;
    }
    return Math.abs(diff);
}
