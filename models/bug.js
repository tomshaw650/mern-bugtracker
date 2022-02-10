
// initialise mongoose and schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema for bug
const bugSchema = new Schema({
  action: {
    id: Number,
    title: String,
    description: String,
    priority: String,
    done: Boolean,
  },
});

const Bug = mongoose.model('todo', bugSchema);

module.exports = Bug;