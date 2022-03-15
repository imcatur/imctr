function quel(name){
	return document.querySelectorAll(name);
}
var smp = quel('#show-mobile-panel');
var mp = quel('#mobile-panel');
var cmp = quel('#close-mobile-panel');
var sf = quel('#search-finder');
var ss = quel('.show-search');
var bc = quel('#btn-close');
var sss = quel('#sss');
smp[0].onclick = function(e){
	mp[0].style.left = '0';
}
cmp[0].onclick = function(e){
	mp[0].style.left = '-100%';
}
ss[0].onclick = function(e){
	sf[0].style.top = '0';
	sss[0].focus();
}
ss[1].onclick = function(e){
	sf[0].style.top = '0';
	sss[0].focus();
}
bc[0].onclick = function(e){
	sf[0].style.top = '-100%';
}
