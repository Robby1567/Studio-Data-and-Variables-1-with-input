// Declare and initialize the 12 variables here:
const input = require(`readline-sync`);
let astronautCount = input.question("Number of astronauts: ");
let date = "Monday 2019-03-18";
let time = "10:05:34 AM"; 
let astronautStatus = "Ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = "100%";
let weatherStatus = "Clear";
let dashes = "-------------------------------------";
// Write code to generate the LC04 report here:
// /n for line break
console.log(dashes+"\n> LC04 - LAUNCH CHECKLIST\n"+dashes); 
console.log("Date: "+date+ "\nTime: "+time);

console.log("\n"+dashes+"\n> ASTRONAUT INFO \n"+dashes);
console.log("* Count: "+astronautCount+"\n* Status: "+astronautStatus);

console.log("\n"+dashes+"\n> FUEL DATA \n"+dashes); 
console.log("* Fuel temp celsius: "+fuelTempCelsius+"\n* Fuel level: "+fuelLevel);

console.log("\n"+dashes+"\n> MASS DATA \n"+dashes);
console.log("* Crew mass: "+crewMassKg+" kg\n* Fuel mass: "+fuelMassKg+" kg\n* Shuttle mass: "+shuttleMassKg+" kg\n* Total mass: "+totalMassKg+" kg");

console.log("\n"+dashes+"\n> FLIGHT PLAN \n"+dashes);
console.log("* weather: "+weatherStatus);

console.log("\n"+dashes+"\n> OVERALL STATUS \n"+dashes);
console.log("* Clear for takeoff: YES");
// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.