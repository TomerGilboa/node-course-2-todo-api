const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

// deleteMany

// db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
//     console.log(result);
// });

// deleteOne

// db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
//     console.log(result);
// });

// findOneAnddelete

// db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
//     console.log(result);
// });

// Course Task 

// db.collection('Users').deleteMany({name: 'Tomer Gilboa'}).then((result) => {
//     console.log(result);
// });

db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5ad613947b466a0dbacdbf24")}).then((result) => {
    console.log(result);
});

// client.close();

});