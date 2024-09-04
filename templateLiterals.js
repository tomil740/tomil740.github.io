const theName = "Tomi";
const age = 21;
console.log(`my name is ` + theName+ ` and I am ` + age+ ` years old`);

const recLength = 45;
const recWidth = 24;
console.log(`The area of a rectangle with length of ${recLength} and width of ${recWidth} is ${(recLength*recWidth)}`);

const dayOfWeek = "Monday";
const tasks = ["go workout","clean the house","pick up my mail"];
console.log(`On ${dayOfWeek} I have ${tasks.length} tasks`);
for(i in tasks){
    console.log(tasks[i]);
}

const pethQuantity = 10;
console.log(`I love to have a ${pethQuantity} pets`);

const triangleBase = 10;
const triangleHeight = 4;
console.log(`The area of triangle with base of ${triangleBase} and height of ${triangleHeight} is ${(triangleBase*triangleHeight)/2.0}`);