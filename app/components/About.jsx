var React = require('react');

var About = (props) => {
	return(
		<div>
			<h1 className="text-center">About</h1>
			<p>
				This is a weather application build on React.
			</p>
			<p>
				Here are some of the tools I've used
			</p>
			<ol>
				<li>
					<a target="_blank" href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
				</li>
				<li>
					<a target="_blank" href="http://openweathermap.org">I used open weather map to search for weather data by city name.</a> 
				</li>
			</ol>

		</div>
	);
}
module.exports = About;