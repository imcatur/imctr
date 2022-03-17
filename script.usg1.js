function el(id){
	return document.getElementById(id);
}
var iu = el('input-url');
var ur = el('under-rpl');
var g = el('gen');
var ou = el('output-url');
var cp = el('copy');
var cl = el('clear');
g.onclick = function(e){
	var o = '-';
	if(ur.checked){
		o = '_';
	}
	ou.value = iu.value
	.toLowerCase()
	.replace(/[^0-9a-z\s]/g, '')
	.replace(/\s\s+/g, ' ')
	.replace(/\s*$/, '')
	.replace(/\s/g, o);
}
cp.onclick = function(e){
	if(ou.value != ''){
		ou.select();
		ou.setSelectionRange(0, 99999);
		document.execCommand('copy');
	}
}
cl.onclick = function(e){
	ou.value = iu.value = '';
}
