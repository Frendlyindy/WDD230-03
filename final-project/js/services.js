document.getElementById('rooms').onclick = function() {
    document.getElementById("sealBox").style.display = "none";  //hide
	document.getElementById("missBox").style.display = "none"; //show
	document.getElementById("roomBox").style.display = ""; 	   //show
 }
 document.getElementById('missionaries').onclick = function() {
    document.getElementById("sealBox").style.display = "none";  //hide
	document.getElementById("roomBox").style.display = "none"; //show
	document.getElementById("missBox").style.display = ""; 	   //show
 }
 document.getElementById('receptions').onclick = function() {
    document.getElementById("missBox").style.display = "none";  //hide
	document.getElementById("roomBox").style.display = "none"; //show
	document.getElementById("sealBox").style.display = ""; 	   //show
 }
 function roomInfo(){
    document.getElementById("sealBox").style.display = "none";  //hide
	document.getElementById("missBox").style.display = "none"; //show
	document.getElementById("roomBox").style.display = ""; 	   //show
 }