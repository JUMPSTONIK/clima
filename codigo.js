var boton = document.getElementById('buscar');
var ciudad = document.getElementById('nombre');
boton.addEventListener("click", clima);
function clima(e){
	e.preventDefault();
	var link = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + ciudad.value + "&lang=se&appid=" + "73d1f5203c757ffb21ece07084c2b391";
	var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
	var nubes = [] ;
        var humedad= [];
        var presion= [] ;
        var velocidad = [];
        var estado1 = [];
	$.ajax({
		method: "GET",
		url: link,
		success: function(msg, estado,xhr){
			console.log(msg);
        		var latitud = (msg.city.coord.lat);
        		var longitud = (msg.city.coord.lon);
        		var vacio = 0 ;
        			for (var i =0 ; i <= dias.length-1 ; i++) {
        			
        				var vacio = (msg.list[i].clouds);
        				nubes.push(vacio);
        				var vacio = (msg.list[i].humidity);
        				 humedad.push(vacio);
        				var vacio = (msg.list[i].pressure);
        				 presion.push(vacio);
        				var vacio = (msg.list[i].speed);
        				 velocidad.push(vacio);
        				var vacio = (msg.list[i].weather[0].main);
        				estado1.push(vacio);
        			};
        		
        		console.log(nubes);
        		console.log(humedad);
        		console.log(presion);
        		console.log(velocidad);
        		console.log(estado1);

                        for (var x =0 ; x <= dias.length-1 ; x++) {

                                var semana = $(".secundario ." +  dias[x]);
                                var estructura ="<h1 class='dia'>" + dias[x] + "</h1>" + 
                                                "<img src='" + estado1[x] + ".jpg' class='weather'>" +
                                                "<p class='alinia'> Nubes:" + nubes[x] + "</p>" +
                                                "<p class='alinia'> Humedad:" + humedad[x] + "</p>" + 
                                                "<p class='alinia'> Presion:" + presion[x] + "</p>" + 
                                                "<p class='alinia'> Velocidad:" + velocidad[x] + "</p>" + 
                                                "<p class='alinia'> Estado:" + estado1[x] + "</p>";
                                semana.html(estructura);    
                        };
                        var f = new Date();
                        var f = f.getDay()
                        for (var z = 0 ; z <= dias.length-1; z++) {
                                var semana = $(".principal .espacio");
                                if (f==(z+1)) {
                                var estructura ="<form>"+
                                                "<h1 class='dia'>" + dias[z] + "</h1>" + 
                                                "<img src='" + estado1[z] + ".jpg' class='front'>" +
                                                "<p class='alinia'> Nubes:" + nubes[z] + "</p>" +
                                                "<p class='alinia'> Humedad:" + humedad[z] + "</p>" + 
                                                "<p class='alinia'> Presion:" + presion[z] + "</p>" + 
                                                "<p class='alinia'> Velocidad:" + velocidad[z] + "</p>" + 
                                                "<p class='alinia'> Estado:" + estado1[z] + "</p>"+
                                                "<h1>Coordenadas:</h1>" +
                                                "<p class='alinia'> latitud:" + latitud + "</p>" + 
                                                "<p class='alinia'> longitud:" + longitud + "</p>"+
                                                "</form>";
                                semana.html(estructura); 
                                };
                        };

		}
	});

}

 



