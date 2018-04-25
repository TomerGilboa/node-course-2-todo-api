const mongoose = require('mongoose');

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }});

    module.exports = {Todo};

    // let newTodo = new Todo({
    //     text: 'Cook dinner'
    // });

    // newTodo.save().then((doc) => {
    //     console.log('Saved todo', doc);
    // }, (e) => {
    //     console.log('Unable to save todo')
    // });

    // let newTodo2 = new Todo({
    //     completed: false
    // });

    // newTodo2.save().then((doc) => {
    //     console.log(JSON.stringify(doc, undefined, 2));
    // }, (e) => {
    //     console.log('Unable to save todo', e)
    // });
