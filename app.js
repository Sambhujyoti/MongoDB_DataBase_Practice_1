const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
//   await mongoose.connect('mongodb://localhost:27017/fruitsDB');

    await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

}

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String
        // required: [true, 'Oh, you forgot to enter name!']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    // name: "Apple",
    rating: 7,
    review: "Nice and healthy."
});

// fruit.save();

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    likedfruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const grapes = new Fruit({
    name: 'Grapes',
    rating: 8,
    review: "Grapes are saour :("
});

grapes.save();

const person = new Person ({
    name: "Arindam Deb",
    age: 43,
    likedfruit: grapes
});

person.save();

const mango = new Fruit({
    name: 'Mango',
    rating: 10,
    review: "The king of all fruits."
});

const banana = new Fruit({
    name: 'Banana',
    rating: 6,
    review: "Good source of iron."
});

// Fruit.insertMany([mango, banana]).then(function () {
//     console.log('Successfully saved the new fruits in the database.');
// }).catch(function (err) {
//     console.log(err);
// });

// Fruit.find({}).then(function (fruits) {
//     fruits.forEach(fruit => {
//         console.log(fruit.name);  
//         mongoose.connection.close();  
//     });
// }).catch(function (err) {
//     console.log(err);
// });

// Fruit.updateOne({_id: "645d049ae3eeec4081fda321"}, {name: 'Pineapple'}).then(function (frutis) {
//     console.log('Great, the field successfully updated.');
// }).catch(function (err) {
//     console.log(err);
// });

// Fruit.deleteOne({name: 'Apple'}).then(fruits => {
//     console.log('One document has been deleted.');
// }).catch(err => {
//     console.log(err);
// });