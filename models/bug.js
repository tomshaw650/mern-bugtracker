
// initialise mongoose and schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema for bug
const bugSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The bug title is required'],
  },
});

const Bug = mongoose.model('bug', bugSchema);

module.exports = Bug;