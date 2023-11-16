// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
   document.getElementById("missionTarget").innerHTML = `
   <h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name}</li>
       <li>Diameter: ${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${imageUrl}">`;
 };
 
 
 function validateInput(testInput) {
    if(testInput === "") {
        return "Empty";
    } else if (isNaN(Number(testInput))) {
        return "Not a Number"
    } else if (!isNaN(Number(testInput))){
        return "Is a Number";
    } else {
        return "Is a String";
    };
 }
 
 function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoLevel) {
    //validation for all fields insuring all are submitted and correct data type
    let pilotValidation = validateInput(pilotName);
    let coPilotValidation = validateInput(copilotName);
    let fuelValidation = validateInput(fuelLevel);
    let cargoMassValidation = validateInput(cargoLevel);
    
    if (pilotValidation === "Empty" || coPilotValidation === "Empty" || fuelValidation === "Empty" || cargoMassValidation === "Empty") {
        window.alert("All fields are required!");
        return 0;
    } else if (fuelValidation === "Not a Number" || cargoMassValidation === "Not a Number") {
        window.alert("Fuel and Cargo must be numbers!");
    };


    // Visibility

    //Grab launchStatus class
    let launchStatus = document.getElementById("launchStatus");

    // Add pilot and copilot names to list for bottom form
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready for launch.`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName} is ready for launch.`;


    /*validating fuel level. must be 10k or more. if not change faulty items to visible. (fuel status not ready, launchStatus = red and 
     "Shuttle not ready for launch" */
    if (fuelLevel < 10000) {
        list.style.visibility = "";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    } else {
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    };

    // validate cargo mass/cargo level, must be less than 10k if it's over, change list to visible and cargoStatus to "too high".
    if (cargoLevel > 10000) {
        list.style.visibility = "";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    } else {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    };
    
    // if fuel level and cargo level are true, change launch status to green and "Shuttle is Ready for Launch"
    if (cargoLevel <= 10000 && fuelLevel >= 10000) {
        list.style.visibility = "";
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        return 0;
    };
};
 
 async function myFetch() {
    let planetsReturned;

    let response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    planetsReturned = await response.json();
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;