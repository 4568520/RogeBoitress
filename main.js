var parent = document.createElement("div");
var p = document.createElement("p");
parent.append("Some text", p);

console.log(parent.childNodes);


/*
var Terr = new Arrey('A','~','_','T');
var map = [];
var mSize = 15
for (var i = 0; i < mSize; i++) {
  for (var j = 0; j < mSize; i++) {
    map[i]=map[i]+Terr[(Math.random()*4)]
  }
}

window.onload = function(){
  var src= document.getElementById("screen");
  var screen = [];
  for(i=0;i<15;i++){
		screen[i] = '<h1>'+map[i]+'</h1><br>';
    src.insertAdjacentHTML('beforend', screen[i]);
  }

}



  screen = [];
		screen[i] = [];

	for(i=0;i<10;i++){
		screen[i] = "O-O+69OWO";
document.getElementById("screen").innerHTML = screen[i];
  }

  document.getElementById("screen1").innerHTML = screen[0];
}
*/
