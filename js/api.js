export const getWeatherData = async (city) => {
    //https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a1ad164b504843fa402d95462b500cf1&lang=ee&units=metric
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b29b1d29a45a249e2e591bc0770b2a0&Lang=ee&units=metric`
        );

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}