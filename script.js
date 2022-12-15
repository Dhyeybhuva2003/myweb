const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e0328ec2a6msh28faf2e5c06648cp1fb422jsn8d73c6a65a41",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const GETwather = (city) => {
  cityname.innerHTML=city

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi",
    options
  )
    .then((response) => response.json())

    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })

    .catch((err) => console.error(err));
};
// submit.addeventlistener("click", (city) => {
//   GETwather(city.value);
// });
// GETwather("delhi");
