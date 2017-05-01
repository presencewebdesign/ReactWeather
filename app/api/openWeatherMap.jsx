var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const API_KEY = '78419d81dea13ee01b5e4fa6232a338a';
const TEMP_FORMAT_FAHRENHEIT = 'metric';

module.exports = {
	getTemp: function(location){
		var encodeLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}q=${encodeLocation}&appid=${API_KEY}&units=${TEMP_FORMAT_FAHRENHEIT}`;

		return axios.get(requestUrl).then(function(res){
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}else{
				return res.data.main.temp;
			}
		},function(res){
			throw new Error(res.data.message);
		});
	}
}


