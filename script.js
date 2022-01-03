//alert("this is a work in progress");
//painting process to wall hanging.
var shadow = "";
for(var i = 1; i < 250; i++){
	shadow = shadow + "0 " + i + "px #281400,"
}
window.shadow = shadow.slice(0,shadow.length - 1);
window.onload = function(){ 
var id_floorBG = document.getElementById("floorBG");
id_floorBG.style.height = (window.innerHeight - 486) + "px";	document.getElementById("tStand").style.boxShadow = window.shadow;
	var tag_div = document.getElementsByTagName("div");
	for(var i = 0; i < tag_div.length; i++){
		window.wi = i;
		tag_div[i].onclick = function(){
			var class_paint = document.getElementsByClassName("paint");
			for(var i = 0; i < class_paint.length; i++){
				class_paint[i].style.opacity = 1;
			}
			for(var i = 0; i < tag_div.length; i++){
				tag_div[i].onclick = function(){null};
			}
			document.body.style.cursor = "default";
			setTimeout(function(){
				hanP();
			},1000);
		}
	}
}
function hanP(){
	document.getElementById("cWrap").style.display = "none";
	document.getElementById("pWrap").className = "hangWrap";
	document.getElementById("decWrap").style.display = "initial";
	id_ovrWrap = document.getElementById("ovrWrap");

		window.id_ovrWrap.style.marginLeft = "-250px";
	}