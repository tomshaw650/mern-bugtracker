
// initialise mongoose and schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema for bug
const BugSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The bug name is required'],
  },
});

const Bug = mongoose.model('bug', BugSchema);

module.exports = Bug;