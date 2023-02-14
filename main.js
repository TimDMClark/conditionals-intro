// Practice One
const mathProblems = [1 + 1 > 5, 4 * 5 <= 20, 6 / 2 >= 0];

for(let i = 0; i < mathProblems.length; i++) {
if(mathProblems[i] === true) {
    console.log('True fact!')
} else {
    console.log("LIES!")
    }
};

// Practice Two
const likesDogs = true;
if(likesDogs === true) {
    console.log("You're a dog person!")
} else {
    console.log("You're a cat person!")
};

// Practice Three
const person = {
    name: 'Juno',
    language: 'English'
};

if(person.language === 'English') {
    console.log(`Hello, ${person.name}!`)
} else if(person.language === 'Spanish') {
    console.log(`Hola, ${person.name}!`)
} else if(person.language === 'French') {
    console.log(`Bonjour, ${person.name}!`)
};

// Practice Four
let grade = 93

if(grade >= 0 && grade <= 69) {
    console.log('You got an F')
} else if(grade >= 70 && grade <= 76) {
    console.log('You got a D')
} else if(grade >= 77 && grade <= 83) {
    console.log('You got a C')
} else if(grade >= 84 && grade <= 92) {
    console.log('You got a B')
} else if(grade >= 93 && grade <= 100) {
    console.log('You got an A')
};