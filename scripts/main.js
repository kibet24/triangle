function measurements(){
   var a = document.getElementById('sidea').value;
   var b = document.getElementById('sideb').value;
   var c = document.getElementById('sidec').value;

   var x = parseInt(a);
   var y = parseInt(b);
   var z = parseInt(c);


   if (x===y && y===z) {
     alert("This is an equilateral Triangle.");
  }

   else if (x+y<=z || x+z <= y || y+z<= x){
     alert("Cannot form a Triangle.");
   }

   else if (x==y || x==z || y==z) {
     alert("This is an isosceles Triangle.");
  }

   else {
    ("This is a scalene Triangle.")
  }

}
