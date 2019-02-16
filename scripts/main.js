function measurements() {
var a=parseInt(document.getElementById("a")).value;
var b=parseInt(document.getElementById("b")).value;
var c =parseInt(document.getElementById("c")).value;
if ( a+b <= c || b+c <= a || a+c <= b){
  alert("Cannot form a triangle.");
}
else if(a===b&&b==c){
  alert("equilateral");
}
else if (a==b || a==c || b==c) {
  alert("isoceles");
}
else {
  alert("scalene");
}
}
