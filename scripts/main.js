function measurements(){
   var side1 = document.getElementById('sidea').value;
   var side2 = document.getElementById('sideb').value;
   var side3 = document.getElementById('sidec').value;

   var side  = [side1,side2,side3];

   if (side[0]===side[1] && side[1]===side[2]) {
     alert("This is an equilateral Triangle.");
  }

   else if (side[0]==side[1] || side[1]==side[2] || side[2]==side[0]) {
     alert("This is an isosceles Triangle.");
  }
   else if (side[0]+side[1]<=side[2] || side[1]+side[2] <= side [0] || side[2]+side[0]<= side[1]){
    alert("Cannot form a Triangle.");
  }
else {
  alert("Scalene")
}
}
