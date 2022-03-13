var jgh45j_time = 1000 * 20;
function el(id){
	return document.getElementById(id);
}
var note = el("note-8594");
var close_note = el("close-note-4522");
var note_img = el("note-img-6654");
var note_txt = el("note-txt-8879");
close_note.onclick = function(){
	note.style.visibility = "hidden";
	note.style.opacity = "0";
	note.style.bottom = "-40px";
	note.style.animation = "none";
}
var i = -1;
function misochar(){
	i++;
	if(i > msg.length - 1){
		i = 0;
	}
	note_img.src = msg[i].img;
	note_txt.innerHTML = msg[i].txt;
	setTimeout(function(){
		note.style.visibility = "visible";
		note.style.opacity = "1";
		note.style.bottom = "40px";
	}, 500);
	setTimeout(function(){
		note.style.animation = "bounch .25s ease";
	}, 1000);
	setTimeout(function(){
		note.style.visibility = "hidden";
		note.style.opacity = "0";
		note.style.bottom = "-40px";
		note.style.animation = "none";
	}, 12000);
	setTimeout(function(){
		clearTimeout();
		misochar();
	}, jgh45j_time);
}
document.addEventListener('readystatechange', event => { 
	if (event.target.readyState === "interactive"){
	}
	if (event.target.readyState === "complete"){
		setTimeout(function(){
			misochar();
		}, 3000);
	}
});
