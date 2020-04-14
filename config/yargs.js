const direccion = {
    alias: 'd',
    desc: 'Ubicación de la ciudad para obtener el clima',
    demand: true
};

const argv = require('yargs').options({
    direccion
}).argv;

module.exports = {
    argv
};