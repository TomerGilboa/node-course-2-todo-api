// We call this to use - ObjectId.isValid
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5ae20075c2262d21f4836faf';

if(!ObjectID.isValid(id)) {
    console.log('ID not valied');
}

// Todo.find({
//     // don't need to add the ObjectID with mongoose
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));


// User.findByID
let userId = '5ae08acb625a1e0b6137d810';

User.findById(userId).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log('User By Id', user);
}).catch((e) => console.log(e));
