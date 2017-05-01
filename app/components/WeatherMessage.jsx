var React = require('react');

var WeatherMessage = ({temp,location}) => {
	return(
		<h3 className="text-center"><pre>It is {temp}&deg;C|&deg;F in {location}</pre></h3>
	);
}

module.exports = WeatherMessage;