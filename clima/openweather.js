const axios = require('../config/axios').axios;

const getClima = async(lat, lon) => {
    const apiKey = '37b6edfa6da83e4ca2f375d8c9c3ab0b';
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`);
    const name = resp.data.name;
    const temp = resp.data.main.temp;
    return {
        name,
        temp
    };
};

module.exports = {
    getClima
};