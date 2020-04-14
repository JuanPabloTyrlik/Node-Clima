const axios = require('../config/axios').axios;

const getLugarLatLon = async(direccion) => {
    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': '4dfc9163fdmshc724f2de2ba6381p1009f6jsncf5ea4e27ca9' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) throw new Error(`No se encontraron resultados para ${ direccion }`);

    const data = resp.data.Results[0];

    return {
        name: data.name,
        lat: data.lat,
        lon: data.lon
    };

};

module.exports = {
    getLugarLatLon
};