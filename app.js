const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');

lugar.getLugarLatLon(argv.direccion)
    .then(data => console.log(data))
    .catch(err => console.log(err));