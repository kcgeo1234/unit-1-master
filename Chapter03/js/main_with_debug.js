function createCityPopTable(){
	// create 1 array contains 4 objects that carry city names and their population data
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	// create a header array for later use
	header = ["City", "Population"];
	//create the table element
    var table = document.createElement("table");
    //create a header row
    var headerRow = document.createElement("tr");

	// add the "City" and "Population" Headers
	for (let i=0; i< header.length; i++){
		let tableHeader = document.createElement("th");
		tableHeader.innerHTML = header[i];
		headerRow.appendChild(tableHeader);

	}

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add new rows for each city
	for (let i = 0; i < cityPop.length; i++){
        // create the necessary structure elements
		let tr = document.createElement("tr");
        let city = document.createElement("td");
        let pop = document.createElement("td");

		// add city name
		city.innerHTML = cityPop[i].city;
        tr.appendChild(city);
        // add city population
        pop.innerHTML = cityPop[i].population;
        tr.appendChild(pop);
		// add the new row to the end of table
        table.appendChild(tr);
    };

	// add the table to the mydiv in index.html
	let mydive = document.getElementById("myDiv");
	mydive.appendChild(table);

	// add CitySize into the table
	addColumns(cityPop);
	// add the event effect into the table
	addEvents();
};






// create addColumns function to add columns
function addColumns(cityPop){

    // search for all "tr" and use forEach to iterate all elemets
    document.querySelectorAll('tr').forEach(function(row, i){
		// forEach start with i=0, and they first row we want to add is the header
    	if (i == 0){
			// add header "City Size"
			// type error: "insertAdjacntHTML" should be "insertAdjacentHTML"
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} 
		// the operation that would do in the rest of the rows would be put in this else block
		else {
			// create a variable citySize
    		var citySize;
			// since i will be starting from 1, but wew want to access the first element, which is cityPop[0], so it will start with [i-1]
    		// we have 3 kinds of citySize, small(<100000), medium(>100000 and <500000), large(>=500000)
			if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
    		} 
			else if (cityPop[i-1].population < 500000){
				// this should be "citySize" instead of "citysize"
    			citySize = 'Medium';	
    		} 
			else {
    			citySize = 'Large';
    		};
			// put the citySize variable into a row with the following function
			// we have SyntaxError for insertAdjacentHTML
			// it also lost a ">" behind '<td'
			// type error: "insertAdjacntHTML" should be "insertAdjacentHTML"
			row.insertAdjacentHTML("beforeend",'<td>' + citySize + '</td>');
    	};
    });
};
// add an "addEvents" function
function addEvents(){
    let table = document.querySelector("table");
	// search for all "table" and use addEventListener with "mouseover" to define an operation when a mouse moves on it.
	table.addEventListener("mouseover", function(){
		// since we're going to give RGB their respective value. it's 3 numbers in total, which are ranged from 0~255.
		// they will need to be presented in the form of this example: color = "rgb(225,250,190)"
		// so the following codes are used to create a random color. Using string concatenation to finish the command in the form we just mentioned
		var color = "rgb(";

		for (var i=0; i<3; i++){
			// create a random number and round to the nearest integer
			var random = Math.round(Math.random() * 255);
			// remove "" from random in the next line
			color += random;

			if (i<2){
				color += ",";
			} 
			else {
				color += ")";
			};
		// it lost a "}" here
		};
		// assign the random color we just created to table
		table.style.color = color;

		// document.querySelector("table").color = color;
	});

	// create a function to show alert when clicking
	function clickme(){
		alert('Hey, you clicked me!');
	};
	// add the function to the table
	table.addEventListener("click", clickme);
};

// create debugAjax function
function debugAjax(){
	// declare myData
	var myData;
	// fetch the content in MegaCities.geojson
	// convert the fetched object into string
	// load the string into HTML div with its id=myDiv
	// print it in the console and the browser (window or page)
	fetch("data/MegaCities.geojson")
		.then(function(response){
			//perform data conversion (convert response into string)
			return response.json();
		})
		.then(function(data){

			myData = data
			document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(myData))
			console.log(myData);
		})

		console.log(myData);
		// document.querySelector("#myDiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
	
};

//call the create table function when the window has loaded
window.onload = createCityPopTable();
//call debugAjax function when the window has loaded
window.onload = debugAjax();
