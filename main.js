
	screen = [];
	for(i=0;i<10;i++){
		screen[i] = [];
	}
	for(i=0;i<10;i++){
		screen[i] = "O-O+69OWO";
	}

	map = [];
	for(i=0;i<50;i++){
		map[i]=[];
		for(o=0;o<50;o++){
			map[i][o] = "=gxxxxx";
		}
	}
  document.getElementById("screen1").innerHTML = screen[0];
  document.getElementById("screen2").innerHTML = screen[1];
  document.getElementById("screen3").innerHTML = screen[2];
  document.getElementById("screen4").innerHTML = screen[3];
  document.getElementById("screen5").innerHTML = screen[4];
  document.getElementById("screen6").innerHTML = screen[5];
  document.getElementById("screen7").innerHTML = screen[6];
  document.getElementById("screen8").innerHTML = screen[7];
  document.getElementById("screen9").innerHTML = screen[8];
