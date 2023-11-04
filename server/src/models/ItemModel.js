const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        required: false,
    }
});
const ItemModel = mongoose.model('Item', ItemSchema);
module.exports = ItemModel;