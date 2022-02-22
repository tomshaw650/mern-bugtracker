
// initialise mongoose and schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema for bug
const bugSchema = new Schema({
  action: {
    title: String,
    description: String,
    priority: String,
    done: Boolean,
    },
  }, {
  versionKey: false
});

const Bug = mongoose.model('bug', bugSchema);

module.exports = Bug;