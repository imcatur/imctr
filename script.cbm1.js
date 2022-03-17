function el(id){
	return document.getElementById(id);
}
var ci = el('code-input');
var co = el('code-output');
var cv = el('cv');
var cp = el('cp');
var cl = el('cl');
cv.onclick = function(e){
	co.value = ci.value
	.replace(/</g, '&lt;')
	.replace(/>/g, '&gt;');
}
cp.onclick = function(e){
	if(co.value != ''){
		co.select();
		co.setSelectionRange(0, 99999);
		document.execCommand('copy');
	}
}
cl.onclick = function(e){
	ci.value = co.value = '';
}
