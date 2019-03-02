//Matt Gill
//Brittany Spears

//const firstName = 'Matt';
//const lastName = 'Gill';

//console.log(firstName + " " + lastName);
//console.log(`${firstName} ${lastName}`);

//const firstName = 'Britteny';

const namePrinter = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
};

namePrinter('Zoe', 'Ames');
namePrinter('John', 'Doe'); 



const nuggetizer = (animal) => {
    return `processed ${animal}`;
};

console.log(nuggetizer("pig"));



const dogBreedPrinter = (dogBreed) => {
    return `My favorite dog breed is ${dogBreed}`;

};

console.log(dogBreedPrinter("Lab"));

//let dogBreed = prompt("What is your favorite dog breed?");
//console.log(dogBreedPrinter(dogBreed));
/*
const dogBreedDiv = document.getElementById('dog-breeds');
dogBreedDiv.innerHTML = dogBreedPrinter('lab');

const nuggetDiv = document.getElementById('nugget');
nuggetDiv.innerHTML = nuggetizer('chicken');
nuggetDiv.innerHTML += nuggetizer('duck');
*/

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

printToDom('dog-breeds', dogBreedPrinter('lab'));
printToDom('nugget', nuggetizer('duck'));
printToDom('nugget', 'mmmmmmm');

let bandNumber = 1;
const addBand = (bandName) => {
    const bandText = `<h5>${bandNumber} ${bandName}<h5>`;
    printToDom('band-list', bandText); 
    bandNumber += 1;

};

addBand('Mettalica');
addBand('Slayer'); 