// Clock
function showTime(){
	var date = new Date();
	var h = date.getHours(); //0 - 23
	var m = date.getMinutes(); //0 - 59
	var s = date.getSeconds(); //0-59

	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	var time = h + ":" + m + ":" + s;
	document.getElementById("clockDisplay").innerText = time;
	document.getElementById("clockDisplay").textContent = time;

	setTimeout(showTime, 1000);		
}
showTime();

// Background Image
var morning = document.getElementById('morning');
var afternoon = document.getElementById('afternoon');
var evening = document.getElementById('evening');
var night = document.getElementById('night');

var today = new Date().getHours();

if (today >= 6 && today <= 11) {
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('images/morning.png')";
	document.body.style.backgroundColor="#fbc2ad";

} else if (today >= 12 && today <= 17) {
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('images/afternoon.png')";
	document.body.style.backgroundColor="#a6effe";
	

} else if (today >= 18 && today <= 23) {
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('images/evening.png')";
	document.body.style.backgroundColor="#c65a8a";

} else{
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('images/night.png')";
	document.body.style.backgroundColor="#4c4396v";
}
