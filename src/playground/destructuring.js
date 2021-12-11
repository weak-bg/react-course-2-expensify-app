//
// Object Destructuring
//

// const person = {
//     name: 'andrew',
//     age: 26,
//     location: {
//         city: 'philly',
//         temp: 69
//     }
// };

// const {name='anonymous', age} = person;
// console.log(`${name} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// };

// const book = {
//     title: 'ego is the enemy',
//     author: 'ryan holiday',
//     publisher: {
//         name: 'penguin'
//     }
// };

// const { name: publisherName = 'self-published' } = book.publisher;
// console.log(publisherName);


//
// Array Destructuring
//

// const address = ['1299 s juniper street', 'philly', 'pennsylvania', '19147'];
// const [, city, state = 'new york'] = address;
// console.log(`You are in ${city} ${state}`);

const item = ['coffee (iced)', '$2.00', '$2.50', '$2.75'];

const [menuItem, , mediumCost] = item;

console.log(`A medium ${menuItem} costs ${mediumCost}.`);