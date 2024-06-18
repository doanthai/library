//https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two
function lonelyinteger(a: number[]): number {
    // Write your code here
    let m: Record<number, number> = {};
    a.forEach(w => {
        if (m[w] == undefined) m[w] = 1;
        else delete m[w];
    });
    return +Object.keys(m)[0];
}
