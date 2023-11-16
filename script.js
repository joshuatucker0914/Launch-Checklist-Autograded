// Write your JavaScript code here!

window.addEventListener("load", function() {
    const form = document.querySelector("form");
    const list = document.getElementById("faultyItems");
    const pilotName = document.querySelector("input[name=pilotName]");
    const copilotName = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoMass = document.querySelector("input[name=cargoMass]");

    //call formSubmission function
    form.addEventListener("submit", function(event) {
       formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value); {
        event.preventDefault();
       };
    });


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned from calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
     }).then(function () {

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

        let destinationPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, destinationPlanet.name, destinationPlanet.diameter, destinationPlanet.star, destinationPlanet.distance, destinationPlanet.moons, destinationPlanet.image);

    })
    
 });