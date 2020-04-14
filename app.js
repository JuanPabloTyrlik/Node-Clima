const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/openweather');


const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);
        console.log(`La temperatura de ${coords.name} es de ${temp.temp}°C`);
    } catch (e) {
        console.log(`No se pudo obtener el clima para ${direccion}`);
    }
};




getInfo(argv.direccion);

// lugar.getLugarLatLon(argv.direccion)
//     .then(coords => {
//         clima.getClima(coords.lat, coords.lon)
//             .then(response => {
//                 console.log(`${coords.name}
// Clima: ${response.weather}
// Temperatura: ${response.temp}°C`);
//             })
//             .catch(console.log);
//     })
//     .catch(err => console.log(err));