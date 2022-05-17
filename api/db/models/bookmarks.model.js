const mongoose = require('mongoose');

const BookmarksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    link:{
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

const Bookmarks = mongoose.model('Bookmarks', BookmarksSchema);

module.exports = { Bookmarks }