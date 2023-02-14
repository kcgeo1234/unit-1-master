// // Example 2.5+2.6
// function jsAjax(){
//     // Step 1: Create the data request 
//     var request = new Request('data/MegaCities.geojson');
//     //Step 2: define Fetch parameters 
//     var init = {
//         method: 'GET'
//     }
//     //Step 3: use Fetch to retrieve data
//     fetch(request, init)
//         .then(conversion) //Step 4 convert data to usable form
//         .then(callback) //Step 5 Send retrieved data to a callback function
// };

// //define conversion callback function
// function conversion(response){
//   //convert data to usable form
//   return response.json();
// }

// //define callback function
// function callback(response){
//     //tasks using the data go here
//     // console.log(response)
//     console.log(JSON.stringify(response));
// }

// window.onload = jsAjax();

// Example 2.7: Simplifying the fetch() request in main.js
function jsAjax(){
    //use Fetch to retrieve data
    fetch('data/MegaCities.geojson')
        .then(conversion) //convert data to usable form
        .then(callback) //send retrieved data to a callback function
};

//define conversion callback function
function conversion(response){
  //convert data to usable form
  return response.json();
}

//define callback function
function callback(response){
    // //tasks using the data go here
    // console.log(JSON.stringify(response))
    const div = document.getElementById('myDiv');
    div.textContent = JSON.stringify(response);
}

window.onload = jsAjax();

// function jsAjax(){
//     //define a variable to hold the data
//     var myData;

//     //basic fetch
//     fetch('data/MegaCities.geojson')
//         .then(function(response){
//             return response.json();
//         }) 
//         .then(function(response){
//             myData = response;

//             //check the data
//             console.log(myData)
//         }) 

//     //check the data
//     console.log(myData)
// };

// document.addEventListener('DOMContentLoaded',jsAjax)