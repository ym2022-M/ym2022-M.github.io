// Step 1: Create variables to store references to elements
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weather-info");
const btn = document.getElementById("btn");

// Step 2: Add an event listener to the button
btn.addEventListener("click", () => {
    // Step 3: Get the value of the input field (city name)
    const cityName = cityInput.value;

    // Step 4: Check if the city input is empty
    if (cityName === "") {
        alert("Please enter a city name.");
    } else {
        // Step 5: Make an HTTP request to OpenWeatherMap API
        const apiKey = "af3d480d812c834516b9ee7006854325";
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}';

        fetch(apiUrl)
            .then((response) => {
                // Step 6: Implement error handling
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                // Update the weather info container with weather details
                const weatherDescription = data.weather[0].description;
                const mainTemperature = data.main.temp;
                const windSpeed = data.wind.speed;

                const weatherHTML = `
                    <p>Weather: ${weatherDescription}</p>
                    <p>Temperature: ${mainTemperature} K</p>
                    <p>Wind Speed: ${windSpeed} m/s</p>
                `;
                weatherInfo.innerHTML = weatherHTML;
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("An error occurred while fetching weather data.");
            });
    }
});