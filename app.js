function greet(name, age) {
    console.log ("Hello I am " + name + "! I am " + age + " years old.");
}

greet ("Sadie Biggs", 20);


function adder (num1, num2) {
    console.log ("I have " + num1 + " sister and " + num2 + " brothers!");
}

adder (1, 3);

const profile = {
    firstName: "Sadie",
    lastName: "Biggs",
    favoriteColor: "Light Blue",
    favoriteAnimal: "Otter"
};

function displayName(word1, word2) {
    console.log (word1 + word2);
  }

displayName ("Sadie ", " Biggs");

onclick = Date();


let text1 = "Hello friends!";
let text2 = text1.toUpperCase();
console.log (text2);

const name ="Sadie";
const proffesion = "Photographer";
console.log (`My name is ${name} and I am a ${proffesion} `);

let x = 7.867;

const money = 
  x.toFixed(0) + " dollars, " +
  x.toFixed(2) + " dollars, " +
  x.toFixed(4) + " dollars, and " +
  x.toFixed(6) + " dollars! ";

console.log (money);



if (new Date > 18) {
    greeting = "Good night!";
  }
 console.log (greeting);


 let date = new Date().getDay();
 
switch (date) {
  case 0:
    day = "Today is Sunday!";
    break;
  case 1:
    day = "Today is Monday!";
    break;
  case 2:
    day = "Today is Tuesday!";
    break;
  case 3:
    day = "Today is Wednesday!";
    break;
  case 4:
    day = "Today is Thursday!";
    break;
  case 5:
    day = "Today is Friday!";
    break;
  case  6:
    day = "Today is Saturday!";
}

console.log (day);

console.log (profile);


console.log(name);

document.write(day);

document.write(" I'm Learning a lot about Javascript! ");

document.write(greeting);