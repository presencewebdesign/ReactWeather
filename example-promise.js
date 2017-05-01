// function getTempCallback(location,callback){
// 	callback(undefined, 78);
// 	callback('City not found');
// }

// getTempCallback('Peterborough', function(err,temp){
// 	if(err){
// 		console.log('error', err);
// 	}else{
// 		console.log('Success', temp);
// 	}
// });

// function getTempPromise(location){
// 	return new Promise(function(resolve,reject){
// 		resolve(79);
// 		reject('City not found');
// 	});
// }

// getTempPromise('Peterborough').then(function(temp){
// 	console.log('Promise Success', temp);
// }, function (err){
// 	console.log('Promise Error', err);
// });


function addPromise(a,b){
		return new Promise(function(resolve,reject){
		if (typeof a === 'number' && typeof b === 'number'){
			resolve(a + b);
		}else{
			reject('a & b need to be numbers');
		}
	});
}

addPromise(2,3).then(function(sum){
	console.log('Success', sum);
}, function (err){
	console.log('Error', err);
});

addPromise('andrew',9).then(function(sum){
	console.log('Success', sum);
}, function (err){
	console.log('Error', err);
});