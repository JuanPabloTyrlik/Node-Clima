const argv = require('./config/yargs').argv;
const axios = require('./config/axios').axios;

const encodedUrl = encodeURI(argv.direccion);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    timeout: 1000,
    headers: { 'x-rapidapi-key': '4dfc9163fdmshc724f2de2ba6381p1009f6jsncf5ea4e27ca9' }
});

instance.get()
    .then(resp => console.log(resp.data.Results[0]))
    .catch(err => console.log(err));