//https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
function miniMaxSum(arr: number[]): void {
    // Write your code here
    let min = 1000000000;
    let max = 0;
    let sum = 0;
    arr.forEach(w => {
        sum += w;
        if (w < min) min = w;
        if (w > max) max = w;
    });
    console.log(sum - max, sum - min);

}
