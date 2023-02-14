function debugCallback(response){
	return response.json()
	// .then(function(myData){
	// document.querySelector("#myDiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
}
// );};

function debugAjax(){
	
	var myData;
	
	fetch("data/MegaCities.geojson")
		.then(function(response){
			return debugCallback(response);
		})
		.then(function(data){

			myData = data
			document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(myData))
			console.log(myData);
		})

		console.log(myData);
		// document.querySelector("#myDiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
	
};


window.onload = debugAjax();