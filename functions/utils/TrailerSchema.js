const mongoose = require("mongoose");
const TagSchema = require("./TagSchema");

const { Schema } = mongoose;

const TrailerSchema = new Schema({
  id: String,
  title: {
    type: String,
    unique: false,
    required: true
  },
  date: {
    type: String,
    unique: false,
    required: true
  },
  link: {
    type: String,
    unique: false,
    required: true
  },
  image: {
    type: String,
    unique: false,
    required: true
  },
  tags: [TagSchema]
});

module.exports = TrailerSchema;
