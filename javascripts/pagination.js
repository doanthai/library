function pagination(current,last) {
  var delta = 1, showPage = [1], result = [], l = null;
  for(var i = 2; i <= last; i++ ) {
    if(i==last || (i>= current-delta && i <= current+delta)) showPage.push(i);
  }
  for (var i in showPage) {
    if(l!= null && showPage[i]-l!==1) result.push('...');
    result.push(showPage[i]);
    l=showPage[i];
  }
  return result;
}
