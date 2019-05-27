function peticionAsync(tipo, url, parametros) {
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (ajax.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
			if (ajax.status == 200) {
				let resp = JSON.parse(ajax.responseText);
				if(resp.error == "0") {
					if (url=='/comentarios') {
						dibujarPublicaciones(resp.registros);
					} else if (url === '/login') {
						alert("Bienvenido: " + resp.nombre);
					}
				}
				//El resultado es exitoso!
				//Tomar las acciones necesarias aquí
			} else if (ajax.status == 404) {
				//No encontró el servicio o API
			} else {
				//Una respuesta inesperada por parte del servidor
				alert('Saliendo precipitadamente de la aldea por culpa de la escaces de rinocerontes');
			}
		}
	};
	//El tipo puede ser GET, POST, PUT, DELETE o cualquier tipo aceptado por HTTP
	//La URL es a dondo hará la petición...
	//Por último, el "true" indica que es una petición asíncrona
	ajax.open(tipo, url, true);
	//Se establece cómo será enviado el contenido.
	ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	//La función encodeURI se encarga que la petición tenga el formato adecuado para ser enviado...
	//un ejemplo de petición puede ser variable=valor&otravariable=otrovalor...
    ajax.send(encodeURI());//poner parámetros

}

    function leerPublicaciones() {
        peticionAsync ('GET', '/comentarios', '');
	}
	
	function doPrueba() {
		var formulario = document.getElementById('formularioLogin');
		peticionAsync ('POST', '/login', 'usr=' + formulario.usr.value + '&pwd' + formulario.pwd.value);
	}

    function dibujarPublicaciones(publis) {
		let contenedor = document.getElementById('contenedorMayor')
        for (let i = 0; i < publis.length; i++) {
            let nuevaPublicacion = '<div class="container">'+
            '<div class="izquierda">'+
            '<h2>'+ publis[i].titulo+'</h2>'+ //titulo viene
			'<p>'+ publis[i].contenido +'</p></div>';
			contenedor.innerHTML += nuevaPublicacion;
		}
    }

/* 

 <div class="container">
        <div class="izquierda">
            <h2>Título nota 1</h2>
            <p>
                Hola bebe, que tengas un excelente día y pues te mando besos, y pues no sé, no dejo de pensar mucho en
                ti, no sé, me gustas tanto, va? Pues no sé, quisiera, no sé, el sábado salir, no sé, pero quisiera
                conocerte, tengo tantas ganas de decirte cosas lindas que pues, no sé.
            </p>
        </div>
*/





    
