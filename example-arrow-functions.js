//var names = ['james','matt','danny'];

// names.forEach(function(name){
// 	console.log('forEach',name);
// });

// names.forEach((name) => {
// 	console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('james'));

// var person ={
// 	name: 'james',
// 	greet: function(){
// 		names.forEach((name) => {
// 			console.log(this.name + 'says hi to '+ name)
// 		});
// 	}
// }

// person.greet();

function add(a,b){
	return a +b;
}

var addStatement = (a,b) => {
	return a + b;
}

console.log(addStatement(1,3));

//addExpress
var addExpression = (a,b) => a + b;
console.log(addExpression(10,-2));

console.log(add(1,3));
console.log(add(1,6));