function onGeoOK(position){
    const API_KEY ="8ea96ae8c5a3eb2f7bc1ffc70534f811";
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then((response) => response.json()).then((data) => {
                    const weather = document.querySelector("#weather span:last-child");
                    const city = document.querySelector("#weather span:first-child");
                   
                 city.innerText = data.name;
                 weather.innerText = `/ ${data.weather[0].main}`;
    });
} 

function onGeoError(){
    const weather = document.querySelector("#weather span:last-child");
    const city = document.querySelector("#weather span:first-child");
  city.innerText = "Can't ";
  weather.innerText ="find you!";
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);