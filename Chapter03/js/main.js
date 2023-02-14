// Add all scripts to the JS folder

// example 2.1
// var mydiv = document.getElementById("mydiv");
// mydiv.innerHTML = "Hello World";

// example 2.2
// function myFunc(){
//     var mydiv = document.getElementById("mydiv");
//     mydiv.innerHTML = "Hello World.";
// };

// window.onload = myFunc();


// example 2.3
//initialize function called when the script loads
// function initialize(){
//     cities();
// };

// //function to create a table with cities and their populations
// function cities(){
//     //define two arrays for cities and population
//     var cities = [
//         'Madison',
//         'Milwaukee',
//         'Green Bay',
//         'Superior'
//     ];
//     var population = [
//         233209,
//         594833,
//         104057,
//         27244
//     ];

//     //create the table element
//     var table = document.createElement("table");

//     //create a header row
//     var headerRow = document.createElement("tr");

//     //add the "City" column
//     var cityHeader = document.createElement("th");
//     cityHeader.innerHTML = "City";
//     headerRow.appendChild(cityHeader);

//     //add the "Population" column
//     var popHeader = document.createElement("th");
//     popHeader.innerHTML = "Population";
//     headerRow.appendChild(popHeader);

//     //add the row to the table
//     table.appendChild(headerRow);

//     //loop to add a new row for each city
//     for (var i = 0; i < cities.length; i++){
//         var tr = document.createElement("tr");

//         var city = document.createElement("td");
//         city.innerHTML = cities[i];
//         tr.appendChild(city);

//         var pop = document.createElement("td");
//         pop.innerHTML = population[i];
//         tr.appendChild(pop);

//         table.appendChild(tr);
//     };

//     //add the table to the div in index.html
//     var mydiv = document.getElementById("mydiv");
//     mydiv.appendChild(table);
// };

// //call the initialize function when the window has loaded
// window.onload = initialize();

// example 3.4
//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
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
    }]

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }

    document.querySelector("#myDiv").appendChild(table);
}

document.addEventListener('DOMContentLoaded',initialize)

//Example 3.5
//get the div id
// var theid = document.querySelector('#myDiv').getAttribute('id');
// //theid is 'myDiv'; add it as text to the div
// document.querySelector('#myDiv').insertAdjacentHTML('beforeend',theid);
// //add the class 'foo' to the div
// document.querySelector('#myDiv').setAttribute('class', 'foo');
// //Check your work with the Inspector!

// Example 3.6
// //get the div id
// var theid = document.querySelector('#myDiv').id;

// //set the id to newdiv
// document.querySelector('#myDiv').id = "newdiv";

// //set the class 
// document.querySelector('#newDiv').className = "foo";

// Example 3.8
//click listener with anonymous handler function
// document.querySelector("table").addEventListener("click", function(){
//     alert('Madison Rocks! Go Badgers!');
// });
// //named handler function for removable listener
// function clickme(){
//     alert('Yeah Green Bay! Go Packers!');
// };
// //add the event listener
// document.querySelector("table").addEventListener('click', clickme);
// //remove the event listener
// document.querySelector("table").removeEventListener('click', clickme);

// Example 3.9
//change the text color
// document.querySelector('#myDiv').style.color = 'red';

// Example 3.10
//Added below Example 3.6...
//change the text color
document.querySelector('#myDiv').style.color = 'red';
//change the text size and alignment
document.querySelector('#myDiv').style.fontSize = '2em';
document.querySelector('#myDiv').style.textAlign = 'left';
//get the text color and add it as text to the div
var thecolor = document.querySelector('#myDiv').style.color;
document.querySelector('#myDiv').insertAdjacentHTML('beforeend',thecolor);