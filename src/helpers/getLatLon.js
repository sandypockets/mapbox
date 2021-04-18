const axios = require('axios');

const getIpAndLocation = () => {
  axios.get('https://api.ipify.org?format=json')
    .then((res) => res.data.ip)
    .then((ip) => {
      axios.get(`https://freegeoip.app/json/${ip}`)
        .then((res) => {
          return {
            lat: res.data.latitude,
            lon: res.data.longitude,
            city: res.data.city
          };
        }).then((latLonCity) => console.log(latLonCity))
    }).catch((err) => console.error(err))
}

export default getIpAndLocation;