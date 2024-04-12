window.addEventListener('load',()=>{

    let lon
    let lat

    let temperaturaValor = document.querySelector("#temperatura-valor")
    let temperaturaDescripcion = document.querySelector("#temperatura-descripcion")

    let ubicacion = document.querySelector("#ubicacion")
    let iconoAnimado = document.querySelector("#iconoAnimado")

    let vientoVelocidad = document.querySelector("#vineto-velocidad")

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion => {
            console.log(posicion.coords.latitude)
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Bilbao&lang=es&units=metric&appid=3b603bd32098614a8e2fc09325bbe026`
            console.log(url);

            fetch(url)
                .then(response => {return response.json()})
                .then(data => {
                    
                    let temp = Math.round(data.main.temp)
                    temperaturaValor.textContent = `${temp} ºC`

                    
                    let desc = data.weather[0].description
                    temperaturaDescripcion.textContent = desc.toUpperCase()

                    ubicacion .textContent = (data.name)
                    vientoVelocidad.textContent = `${data.wind.speed}m/s`

                    //para iconos animados
                    switch(data.weather[0].main){
                        case 'Thunderstorm':
                        iconoAnimado.src = 'animated/thunder.svg'
                        console.log('tormenta');
                        break;
                        case 'Drizzle':
                        iconoAnimado.src = 'animated/rainy-2.svg'
                        console.log('llovizna');
                        break;
                        case 'Rain':
                        iconoAnimado.src = 'animated/rainy-7.svg'
                        console.log('lluvia');
                        break;
                        case 'Snow':
                        iconoAnimado.src = 'animated/snowy-6.svg'
                        console.log('nieve');
                        break;
                        case 'Clear':
                        iconoAnimado.src = 'animated/day.svg'
                        console.log('limpio');
                        break;
                        case 'Atmosphere':
                        iconoAnimado.src = 'animated/weather.svg'
                        console.log('atmosfera');
                        break;
                        case 'Clouds':
                        iconoAnimado.src = 'animated/cloudy-day-1.svg'
                        console.log('nubes');
                        break;

                    }



                })
                .catch(error =>{
                    console.log(error);
                })
        })
    }

})