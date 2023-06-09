function getWeather(){
    var getinp=document.getElementById('cityInput').value
   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${getinp}&appid=6a9df7e133125a14cb3ca8cb5c752e1a
   `)

   .then((res)=>{
 
    // document.querySelector('.weather-container').innerHTML=`Clouds ${res.data.clouds.all}`
document.getElementById('temp').innerHTML=`${Math.round(res.data.main.temp-273.15)}°C`
document.getElementById('feels-like').innerHTML=` Feels Like ${Math.round(res.data.main.feels_like-273.15)}°C`
document.getElementById('clouds').innerHTML=`Clouds ${res.data.clouds.all}%`
// document.getElementById('pressure').innerHTML=`Pressure ${res.data.main.pressure}Pascal  `




   })
   .catch((rej)=>{
    console.log(rej)
   })
}