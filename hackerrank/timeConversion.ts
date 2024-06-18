//https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
function timeConversion(s: string): string {
    // Write your code here
    let hours = s.split(':');
    let h = +hours[0];
    let typeHour = s.substr(-2);
    if (typeHour == 'AM') {
        if (h == 12) h = 0;
    } else {
        if (h != 12) h += 12;       
    }
    return h.toString().padStart(2,'0') + ':' + hours[1] + ':' + hours[2].substr(0,2);

}
