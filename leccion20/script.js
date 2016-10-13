// tu codigo va aca
function callbackPromedio (a, b, c, callback) {
	var suma = ( a+b+c );
	var promedio = (suma / 3);
	return callback(promedio);
}

function segundero(){
	var segundos = 0;
	
	setInterval (function() {
 		segundos = segundos +1;
 		document.getElementById("titulo").innerHTML = segundos;
	}, 1000);
} 
