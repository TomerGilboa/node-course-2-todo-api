const mongoose = require('mongoose');

let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    }
});

module.exports = {User};


// let newUser = new User({
//     email: 'tomer02g@gmail.com'
// })

// newUser.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save todo', e)
// });