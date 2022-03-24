function bigFont() {
	document.getElementById("textarea").style.fontSize = "2em";
}

function changeText(){
	//if fancify = true, make font bold + change color
	if(document.getElementById("fancy").checked == true){
		alert("Changing Text!");
		document.getElementById("textarea").style.fontWeight= "bold";
		document.getElementById("textarea").style.color= "blue";
		document.getElementById("textarea").style.textDecoration = "underline";
	}

	//if boring = true, revert change
	if(document.getElementById("boring").checked == true){
		alert("Reversing Changes!")
		document.getElementById("textarea").style.fontWeight= "normal";
		document.getElementById("textarea").style.color= "black";
		document.getElementById("textarea").style.textDecoration = "none";
	}	
}

function moo(){
	var text = document.getElementById("textarea").value;
	var capText = text.toUpperCase();
	
	//assuming sentence ends with period
	var split = capText.split(".");
	mooText = split.join("-Moo");
	document.getElementById("textarea").value = mooText;
}
