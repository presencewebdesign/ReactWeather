var React = require('react');

// var About = React.createClass({
// 	render: function(){
// 		return(
// 			<h3>About Component</h3>
// 		);
// 	}
// });

//Refactoring
var About = (props) => {
	return(
		<h3>About</h3>
		<p>Welcome to the about page</p>
	);
}
module.exports = About;