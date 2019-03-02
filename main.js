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

let dogBreed = prompt("What is your favorite dog breed?");
console.log(dogBreedPrinter(dogBreed));
