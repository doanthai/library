// https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
function plusMinus(arr: number[]): void {
    // Write your code here
    let positive = 0;
    let negative = 0;
    let zero = 0;
    arr.forEach(w => {
        if (!w) zero++;
        else if (w > 0) positive++;
        else negative++;
        
    });
    console.log(+(positive/arr.length).toFixed(6));
    console.log(+(negative/arr.length).toFixed(6));
    console.log(+(zero/arr.length).toFixed(6));
}
