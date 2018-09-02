var fn = function (){
	var minus = document.getElementsByClassName ('minus');
	console.log (minus);

	for (var i=0; i<minus.length; i++){
		console.log(minus[i]);
		var e = document.createElement ('p');
		e.innerHTML = '-';
		minus[i].appendChild(e);
	}

};s

document.addEventListener('DOMContentLoaded', fn, false);



