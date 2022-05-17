const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    // with auth
    _userId: {
        type: mongoose.Types.ObjectId,
        required: true
    }

})

const Notes = mongoose.model('Notes', NotesSchema);

module.exports = { Notes }