var isOpens = [];
var nOpen = 0;
var colors = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];


function shuffle(list){
	for (var i = 0; i < list.length; i++) {
		var rand = Math.floor(Math.random() * list.length);
		var buf = list[rand];
		list[rand] = list[i];
		list[i] = buf;
	}
}


var t;
var time;
function startTimer(){
	var arr = time.split(":");
	var min = arr[0];
	var sec = arr[1];
	if(nOpen==8){
		return;
	}

	document.getElementById("timer").innerHTML = time;
	if (sec == 59) {
		min++
		sec=0
		if(min == 60){
			alert ("Время вышло");
			window.location.reload();
			return;
		}
		if(min < 10) min = "0" + min;
	}else{
		sec++
	}
	if(sec < 10) sec = "0" + sec;
	time = min + ":" + sec;
	
	t= setTimeout(startTimer, 1000);
}	

function openCard(e){
	
	if(isOpens.length == 2){
		document.getElementById(isOpens[0]).className += 'hidden';
		document.getElementById(isOpens[1]).className += 'hidden';
		isOpens = [];
	}
	e.className = e.className.replace('hidden', '');
	if(isOpens.length == 1 && isOpens[0] != e.id || isOpens.length == 0){
		if(e.id != "o"){
			isOpens.push(e.id);
		}
		
	}
	if(isOpens.length == 2){
		var first = isOpens[0];
		var second = isOpens[1]
		if(colors[first] == colors[second]){
			nOpen++;
			document.getElementById(first).id = "o";
			document.getElementById(second).id = "o";
			isOpens = [];
		}						
	}
	if(nOpen == 8){
		alert("Победа! Твое время: " + time);
		window.location.reload();
	}
}		


function start(){
	isOpens = [];
	nOpen = 0;
	time = "00:00";
	document.getElementById('timer').innerHTML = time;
	shuffle(colors);
	clearTimeout(t);
	startTimer();
	document.getElementById('gamefield').innerHTML = "";
	for(i = 0; i < colors.length; i++){
		document.getElementById('gamefield').innerHTML += '<a id = "' + i + '" class="color' + colors[i] + ' hidden" OnClick = "openCard(this)"> </a>';
	}
	a = document.getElementsByTagName('a');
	for (var i = 0; i < a.length; i++) {
		
	}
}