		function el(id){
			return document.getElementById(id);
		}
		var msg = [
			{
				"img" : "https://png.pngtree.com/png-vector/20201119/ourlarge/pngtree-gift-box-vector-isolated-in-white-png-image_2460575.jpg",
				"txt" : "Mira Telah Memesan <br>Paket Aplikasi Lengkap, <br>Seharga 200K."
			},
			{
				"img" : "https://png.pngtree.com/png-vector/20191122/ourmid/pngtree-red-gift-box-vector-illustration-with-cute-design-isolated-on-white-png-image_2016770.jpg",
				"txt" : "Tina Telah Memesan <br>Paket Aplikasi Lengkap, <br>Seharga 200K."
			},
			{
				"img" : "https://media.istockphoto.com/vectors/gift-boxes-isolated-on-white-3d-white-gift-boxes-with-golden-ribbon-vector-id1340030448?b=1&k=20&m=1340030448&s=612x612&w=0&h=Vsw4UEvd4tr52WlQAd6B6m-oeyVmt8c-k7VPdHp3wpA=",
				"txt" : "Rani Telah Memesan <br>Paket Aplikasi Lengkap, <br>Seharga 200K."
			}
		];
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
			}, 20000);
		}
		misochar();
